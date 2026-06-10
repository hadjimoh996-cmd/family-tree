"use strict";

const isAdmin = () => appState.user?.role === "admin";

// ========= AUTO LOGIN & SWITCH =========
function autoLoginAsGuest() {
  appState.user = { username: "guest", role: "viewer", name: "زائر" };
  document.getElementById("mainApp").style.display = "flex";
  const loginScreen = document.getElementById("loginScreen");
  if (loginScreen) loginScreen.style.display = "none";
  if (isAdmin()) {
    document.getElementById("addRootMemberBtn").style.display = "";
    document.getElementById("adminBadge").style.display = "";
  }
  renderStats();
  renderTree();
}

function switchToAdmin() {
  const pwd = prompt("🔐 أدخل كلمة سر المدير:");
  if (pwd === "admin123") {
    appState.user = { username: "admin", role: "admin", name: "المدير" };
    document.getElementById("addRootMemberBtn").style.display = "";
    document.getElementById("addRootParentBtn").style.display = "";
    document.getElementById("adminBadge").style.display = "";
    renderStats();
    renderTree();
    if (appState.selected) renderSidebar(appState.selected);
    alert("✅ تم التبديل إلى وضع المدير");
  } else {
    alert("❌ كلمة السر غير صحيحة");
  }
}

function doLogout() {
  if (confirm("تسجيل الخروج؟")) location.reload();
}

function showHelp() {
  document.getElementById("helpOverlay").classList.add("visible");
}
function hideHelp() {
  document.getElementById("helpOverlay").classList.remove("visible");
}

// ========= TREE LOGIC =========
function toggleFamily(id, depth) {
  if (depth === 1) {
    if (appState.openedDepth1 === id) {
      appState.openedDepth1 = null;
      closeDepthAndBelow(depth);
    } else {
      closeDepthAndBelow(depth);
      appState.openedDepth1 = id;
      appState.openedByDepth[depth] = id;
    }
  } else if (appState.openedByDepth[depth] === id) {
    closeDepthAndBelow(depth);
  } else {
    if (appState.openedByDepth[depth]) closeDepthAndBelow(depth);
    appState.openedByDepth[depth] = id;
  }
  renderTree();
  setTimeout(() => {
    const target = document.querySelector(`.card[data-id="${id}"]`);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 100);
}

function closeDepthAndBelow(depth) {
  if (depth <= 1) appState.openedDepth1 = null;
  const maxDepth = Math.max(...Object.keys(appState.openedByDepth).map(Number), depth);
  for (let d = depth; d <= maxDepth; d++) delete appState.openedByDepth[d];
}

function shouldShowChildren(id, isRoot) {
  if (isRoot) return true;
  return Object.values(appState.openedByDepth).includes(id);
}

function renderTree() {
  const vp = document.getElementById("treeViewport");
  vp.innerHTML = "";
  vp.appendChild(buildMemberNode(appState.data.rootId, true, 0));
  setTimeout(drawAllArrows, 80);
}

// ========= ARROWS DRAWING =========
function drawAllArrows() {
  const accent = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#8b5e1a";
  document.querySelectorAll(".arrow-host").forEach(host => {
    let svg = host.querySelector(":scope > svg.arrows-svg");
    if (svg) svg.remove();
    const parentId = host.dataset.parentId;
    const childIds = JSON.parse(host.dataset.children || "[]");
    if (!childIds.length) return;
    const parentCard = host.querySelector(`.card[data-id="${parentId}"]`);
    if (!parentCard) return;
    const childCards = childIds.map(cid => host.querySelector(`.card[data-id="${cid}"]`)).filter(Boolean);
    if (!childCards.length) return;

    const hostRect = host.getBoundingClientRect();
    const parentRect = parentCard.getBoundingClientRect();
    const fromX = parentRect.left + parentRect.width / 2 - hostRect.left;
    const fromY = parentRect.bottom - hostRect.top;
    const minChildTop = Math.min(...childCards.map(c => c.getBoundingClientRect().top));
    const forkY = fromY + (minChildTop - hostRect.top - fromY) * 0.45;

    const allRects = [parentRect, ...childCards.map(c => c.getBoundingClientRect())];
    const minX = Math.min(...allRects.map(r => r.left)) - hostRect.left - 10;
    const maxX = Math.max(...allRects.map(r => r.right)) - hostRect.left + 10;
    const maxY = Math.max(...childCards.map(c => c.getBoundingClientRect().bottom)) - hostRect.top + 14;
    const svgW = maxX - minX, svgH = maxY;

    const NS = "http://www.w3.org/2000/svg";
    svg = document.createElementNS(NS, "svg");
    svg.classList.add("arrows-svg");
    svg.setAttribute("width", svgW);
    svg.setAttribute("height", svgH);
    svg.style.cssText = `position:absolute;top:0;left:${minX}px;width:${svgW}px;height:${svgH}px;pointer-events:none;overflow:visible;z-index:2;`;

    const stemPath = document.createElementNS(NS, "path");
    const relFromX = fromX - minX;
    const relForkY = forkY;
    stemPath.setAttribute("d", `M ${relFromX} ${fromY} L ${relFromX} ${relForkY}`);
    stemPath.setAttribute("stroke", accent);
    stemPath.setAttribute("stroke-width", "2.5");
    stemPath.setAttribute("fill", "none");
    svg.appendChild(stemPath);

    childCards.forEach(childCard => {
      const childRect = childCard.getBoundingClientRect();
      const toX = childRect.left + childRect.width / 2 - hostRect.left - minX;
      const toY = childRect.top - hostRect.top;
      const branchPath = document.createElementNS(NS, "path");
      branchPath.setAttribute("d", `M ${relFromX} ${relForkY} L ${toX} ${relForkY} L ${toX} ${toY}`);
      branchPath.setAttribute("stroke", accent);
      branchPath.setAttribute("stroke-width", "2.5");
      branchPath.setAttribute("fill", "none");
      svg.appendChild(branchPath);
      const arrowPath = document.createElementNS(NS, "path");
      arrowPath.setAttribute("d", `M ${toX} ${toY + 1} L ${toX - 5} ${toY - 6} L ${toX + 5} ${toY - 6} Z`);
      arrowPath.setAttribute("fill", accent);
      svg.appendChild(arrowPath);
    });

    if (childCards.length > 1) {
      const allToX = childCards.map(c => {
        const r = c.getBoundingClientRect();
        return r.left + r.width / 2 - hostRect.left - minX;
      });
      const hLine = document.createElementNS(NS, "path");
      hLine.setAttribute("d", `M ${Math.min(...allToX)} ${relForkY} L ${Math.max(...allToX)} ${relForkY}`);
      hLine.setAttribute("stroke", accent);
      hLine.setAttribute("stroke-width", "2.5");
      hLine.setAttribute("fill", "none");
      svg.insertBefore(hLine, svg.firstChild);
    }
    host.style.position = "relative";
    host.appendChild(svg);
  });
}

// ========= BUILD MEMBER NODE =========
function buildMemberNode(id, isRoot, depth) {
  const m = appState.data.members[id];
  if (!m) return document.createTextNode("");
  const wives = (m.wifeIds || []).map(wid => appState.data.members[wid]).filter(Boolean);
  const children = (m.childrenIds || []).filter(cid => appState.data.members[cid]);
  const hasChildren = children.length > 0;
  const isOpened = Object.values(appState.openedByDepth).includes(id);

  const col = document.createElement("div");
  col.className = "couple-unit";
  col.dataset.memberId = id;

  const coupleRow = document.createElement("div");
  coupleRow.className = "couple-row";
  coupleRow.appendChild(buildCard(m, isRoot, false));
  if (wives.length) {
    const wivesWrap = document.createElement("div");
    wivesWrap.className = "wives-stack";
    wives.forEach(w => {
      const pair = document.createElement("div");
      pair.style.display = "flex";
      pair.style.alignItems = "center";
      pair.style.gap = "0";
      const line = document.createElement("div");
      line.className = "marriage-line";
      pair.appendChild(line);
      pair.appendChild(buildCard(w, false, true));
      wivesWrap.appendChild(pair);
    });
    coupleRow.appendChild(wivesWrap);
  }
  col.appendChild(coupleRow);

  if (hasChildren && !isRoot) {
    const expBtn = document.createElement("button");
    expBtn.className = "card-expand-btn";
    expBtn.innerHTML = isOpened ? "▲" : "▼";
    expBtn.onclick = e => { e.stopPropagation(); toggleFamily(id, depth); };
    col.appendChild(expBtn);
  }

  const showChildren = shouldShowChildren(id, isRoot);
  if (showChildren && hasChildren) {
    if (isRoot) {
      const arrowHost = document.createElement("div");
      arrowHost.className = "arrow-host";
      arrowHost.dataset.parentId = id;
      arrowHost.dataset.children = JSON.stringify(children.filter(cid => cid !== appState.openedDepth1));
      arrowHost.style.cssText = "position:relative;width:100%;display:flex;flex-direction:column;align-items:center;";
      const siblingsRow = document.createElement("div");
      siblingsRow.className = "depth1-siblings-row";
      children.forEach(cid => {
        if (cid === appState.openedDepth1) return;
        const childCol = document.createElement("div");
        childCol.style.display = "flex";
        childCol.style.flexDirection = "column";
        childCol.style.alignItems = "center";
        childCol.appendChild(buildMemberNode(cid, false, depth + 1));
        siblingsRow.appendChild(childCol);
      });
      arrowHost.appendChild(siblingsRow);
      col.appendChild(arrowHost);
      if (appState.openedDepth1 && children.includes(appState.openedDepth1)) {
        const expandedHost = document.createElement("div");
        expandedHost.className = "arrow-host";
        expandedHost.dataset.parentId = id;
        expandedHost.dataset.children = JSON.stringify([appState.openedDepth1]);
        expandedHost.style.cssText = "position:relative;width:100%;display:flex;flex-direction:column;align-items:center;";
        const expandedUnit = document.createElement("div");
        expandedUnit.className = "depth1-expanded-unit";
        expandedUnit.appendChild(buildMemberNode(appState.openedDepth1, false, depth + 1));
        expandedHost.appendChild(expandedUnit);
        col.appendChild(expandedHost);
      }
    } else {
      const arrowHost = document.createElement("div");
      arrowHost.className = "arrow-host";
      arrowHost.dataset.parentId = id;
      arrowHost.dataset.children = JSON.stringify(children);
      arrowHost.style.cssText = "position:relative;width:100%;display:flex;flex-direction:column;align-items:center;";
      const childrenRow = document.createElement("div");
      childrenRow.className = "children-row";
      children.forEach(cid => {
        const childCol = document.createElement("div");
        childCol.style.display = "flex";
        childCol.style.flexDirection = "column";
        childCol.style.alignItems = "center";
        childCol.appendChild(buildMemberNode(cid, false, depth + 1));
        childrenRow.appendChild(childCol);
      });
      arrowHost.appendChild(childrenRow);
      col.appendChild(arrowHost);
    }
  }
  return col;
}

// ========= BUILD CARD =========
function buildCard(m, isRoot, isWife) {
  const card = document.createElement("div");
  const cls = ["card"];
  if (isRoot) cls.push("root");
  if (m.death) cls.push("deceased");
  if (appState.selected === m.id) cls.push("selected");
  if (isWife) cls.push("wife-card");
  card.className = cls.join(" ");
  card.dataset.id = m.id;
  card.onclick = e => { e.stopPropagation(); selectMember(m.id); };

  const avatar = document.createElement("div");
  avatar.className = `card-avatar ${m.gender}`;
  if (m.photo) {
    const img = document.createElement("img");
    img.src = m.photo;
    avatar.appendChild(img);
  } else {
    const total = countDescendants(m.id);
    if (total > 0) {
      avatar.style.cssText = "flex-direction:column;gap:1px;";
      const numEl = document.createElement("span");
      numEl.textContent = total;
      const lblEl = document.createElement("span");
      lblEl.textContent = "فرد";
      lblEl.style.fontSize = ".55em";
      avatar.append(numEl, lblEl);
    } else {
      avatar.textContent = initials(m.name);
    }
  }
  card.appendChild(avatar);

  const nameEl = document.createElement("div");
  nameEl.className = "card-name";
  nameEl.textContent = m.name;
  card.appendChild(nameEl);

  if (isWife) {
    const badge = document.createElement("div");
    badge.className = "wife-badge";
    badge.textContent = "زوجة";
    card.appendChild(badge);
  }
  if (m.birth || m.death) {
    const dates = document.createElement("div");
    dates.className = "card-dates";
    dates.textContent = (m.birth || "؟") + (m.death ? ` – ${m.death}` : "");
    card.appendChild(dates);
  }
  if (m.death) {
    const db = document.createElement("div");
    db.className = "deceased-badge";
    db.textContent = "رحمه الله";
    card.appendChild(db);
  }

  if (isAdmin()) {
    const btns = document.createElement("div");
    btns.className = "card-admin-btns";
    if (isRoot) {
      btns.innerHTML = `<button class="btn sm" onclick="event.stopPropagation();openAddParentModal()">⬆ جد</button>`;
    }
    if (!isWife) {
      btns.innerHTML += `<button class="btn sm" onclick="event.stopPropagation();openAddModal('${m.id}')">＋</button>
                         <button class="btn sm" onclick="event.stopPropagation();openAddWifeModal('${m.id}')">♥</button>`;
    }
    btns.innerHTML += `<button class="btn sm" onclick="event.stopPropagation();openEditModal('${m.id}')">✎</button>
                       <button class="btn sm danger" onclick="event.stopPropagation();deleteMember('${m.id}')">✕</button>`;
    card.appendChild(btns);
  }
  return card;
}

// ========= SELECT & SIDEBAR =========
function selectMember(id) {
  appState.selected = id;
  renderTree();
  renderBreadcrumb(id);
  renderSidebar(id);
}
function deselectMember() {
  appState.selected = null;
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("breadcrumbBar").style.display = "none";
  renderTree();
}
function renderBreadcrumb(id) {
  const path = getAncestors(id);
  const bar = document.getElementById("breadcrumbBar");
  if (path.length <= 1) { bar.style.display = "none"; return; }
  bar.style.display = "flex";
  bar.innerHTML = "<span style='font-weight:700'>📍 الموقع:</span> ";
  path.forEach((bc, i) => {
    if (i > 0) {
      const sep = document.createElement("span");
      sep.className = "sep";
      sep.textContent = " › ";
      bar.appendChild(sep);
    }
    const s = document.createElement("span");
    s.textContent = bc.name;
    s.onclick = () => selectMember(bc.id);
    bar.appendChild(s);
  });
}
function renderSidebar(id) {
  const m = appState.data.members[id];
  if (!m) return;
  const age = calcAge(m.birth, m.death);
  const wives = (m.wifeIds || []).map(w => appState.data.members[w]).filter(Boolean);
  const children = (m.childrenIds || []).map(c => appState.data.members[c]).filter(Boolean);
  const ini = initials(m.name);
  document.getElementById("sidebarHeader").innerHTML = `
    <div class="sidebar-avatar ${m.gender}">${m.photo ? `<img src="${m.photo}">` : ini}</div>
    <div><div class="profile-name">${m.name}</div><div>${m.gender === "male" ? "👨 رجل" : "👩 امرأة"} ${m.death ? "🕊 متوفى" : ""}</div></div>
    <button class="btn icon-btn" onclick="deselectMember()">✕</button>`;
  let body = "";
  if (m.birth) body += `<div class="info-row"><span class="info-label">📅 الميلاد</span><span class="info-val">${m.birth}</span></div>`;
  if (m.death) body += `<div class="info-row"><span class="info-label">🕊 الوفاة</span><span class="info-val">${m.death}</span></div>`;
  if (age) body += `<div class="info-row"><span class="info-label">🎂 العمر</span><span class="info-val">${age} سنة</span></div>`;
  if (m.bio) body += `<div class="bio-text">💬 ${m.bio}</div>`;
  if (wives.length) {
    body += `<div class="section-title">💑 الزوجات</div>`;
    wives.forEach(w => body += `<div class="info-row" style="cursor:pointer" onclick="selectMember('${w.id}')"><span>👩 ${w.name}</span></div>`);
  }
  if (children.length) {
    body += `<div class="section-title">👨‍👩‍👧‍👦 الأبناء (${children.length})</div>`;
    children.forEach(c => body += `<div class="info-row" style="cursor:pointer" onclick="selectMember('${c.id}')"><span>${c.gender === "male" ? "👦" : "👧"} ${c.name}</span></div>`);
  }
  if (isAdmin()) {
    body += `<div style="margin-top:20px;display:flex;gap:8px;">
      <button class="btn sm" onclick="openEditModal('${id}')">✎ تعديل</button>
      <button class="btn sm danger" onclick="deleteMember('${id}')">✕ حذف</button>
    </div>`;
  }
  document.getElementById("sidebarBody").innerHTML = body;
  document.getElementById("sidebar").classList.add("open");
}

// ========= STATS & SEARCH =========
function renderStats() {
  const all = Object.values(appState.data.members);
  const alive = all.filter(m => !m.death).length;
  const deceased = all.filter(m => m.death).length;
  document.getElementById("statsBar").innerHTML = `
    <div class="stat">👥 <strong>${all.length}</strong> شخص</div>
    <div class="stat">✨ <strong>${alive}</strong> على قيد الحياة</div>
    ${deceased ? `<div class="stat">🕊 <strong>${deceased}</strong> متوفى</div>` : ""}
    <div style="margin-right:auto;">مرحباً ${appState.user?.name}</div>`;
}
function handleSearch() {
  const q = document.getElementById("searchInput").value;
  const cont = document.getElementById("searchResults");
  if (q.length < 2) { cont.classList.remove("visible"); return; }
  const res = Object.values(appState.data.members).filter(m => m.name.includes(q)).slice(0, 8);
  if (!res.length) { cont.classList.remove("visible"); return; }
  cont.innerHTML = res.map(m => `
    <div class="search-result-item" onclick="pickSearchResult('${m.id}')">
      <div><div>${m.name}</div><div style="font-size:.7rem">${m.birth || ""}</div></div>
      <div class="card-avatar ${m.gender}" style="width:30px;height:30px">${m.name[0]}</div>
    </div>`).join("");
  cont.classList.add("visible");
}
function showSearchResults() {
  if (document.getElementById("searchInput").value.length >= 2)
    document.getElementById("searchResults").classList.add("visible");
}
function hideSearchResultsDelay() {
  setTimeout(() => document.getElementById("searchResults").classList.remove("visible"), 200);
}
function pickSearchResult(id) {
  document.getElementById("searchInput").value = "";
  document.getElementById("searchResults").classList.remove("visible");
  selectMember(id);
}

// ========= HELPERS & CRUD =========
function getAncestors(id, arr = []) {
  const find = cid => {
    for (const [pid, m] of Object.entries(appState.data.members)) {
      if (m.childrenIds?.includes(cid)) {
        arr.unshift({ id: pid, name: m.name });
        find(pid);
        return;
      }
    }
  };
  find(id);
  arr.push({ id, name: appState.data.members[id]?.name });
  return arr;
}
function saveAndRefresh() {
  saveDataToStorage();
  renderTree();
  renderStats();
  if (appState.selected) renderSidebar(appState.selected);
}
function openAddModal(parentId) {
  appState.modal = { type: "add", parentId };
  appState.photoPreview = "";
  document.getElementById("modalTitle").innerText = "➕ إضافة ابن/ابنة";
  clearForm();
  document.getElementById("modalOverlay").classList.add("visible");
}
function openAddParentModal() {
  appState.modal = { type: "addParent" };
  appState.photoPreview = "";
  document.getElementById("modalTitle").innerText = "⬆ إضافة جد";
  clearForm();
  document.getElementById("modalOverlay").classList.add("visible");
}
function addParentMember(memberData) {
  const newId = uid();
  const newMem = { id: newId, wifeIds: [], childrenIds: [appState.data.rootId], ...memberData };
  appState.data.members[newId] = newMem;
  appState.data.rootId = newId;
  appState.openedDepth1 = null;
  appState.openedByDepth = {};
  appState.selected = null;
  saveAndRefresh();
}
function openAddWifeModal(parentId) {
  appState.modal = { type: "addWife", parentId };
  appState.photoPreview = "";
  document.getElementById("modalTitle").innerText = "♥ إضافة زوجة";
  clearForm();
  document.getElementById("formGender").value = "female";
  document.getElementById("modalOverlay").classList.add("visible");
}
function openEditModal(memberId) {
  const m = appState.data.members[memberId];
  if (!m) return;
  appState.modal = { type: "edit", memberId };
  appState.photoPreview = m.photo || "";
  document.getElementById("modalTitle").innerText = "✎ تعديل";
  document.getElementById("formName").value = m.name;
  document.getElementById("formGender").value = m.gender;
  document.getElementById("formBirth").value = m.birth || "";
  document.getElementById("formDeath").value = m.death || "";
  document.getElementById("formBio").value = m.bio || "";
  document.getElementById("photoUploadArea").innerHTML = m.photo ? `<img src="${m.photo}">` : `<div>📷</div><div>انقر لإضافة صورة</div>`;
  document.getElementById("modalOverlay").classList.add("visible");
}
function clearForm() {
  document.getElementById("formName").value = "";
  document.getElementById("formGender").value = "male";
  document.getElementById("formBirth").value = "";
  document.getElementById("formDeath").value = "";
  document.getElementById("formBio").value = "";
  document.getElementById("photoUploadArea").innerHTML = `<div>📷</div><div>انقر لإضافة صورة</div>`;
}
function handlePhotoUpload(e) {
  const f = e.target.files[0];
  if (!f) return;
  const r = new FileReader();
  r.onload = ev => {
    appState.photoPreview = ev.target.result;
    document.getElementById("photoUploadArea").innerHTML = `<img src="${ev.target.result}">`;
  };
  r.readAsDataURL(f);
}
function saveModal() {
  const name = document.getElementById("formName").value.trim();
  if (!name) { alert("الاسم مطلوب"); return; }
  const data = {
    name,
    gender: document.getElementById("formGender").value,
    birth: document.getElementById("formBirth").value.trim() || null,
    death: document.getElementById("formDeath").value.trim() || null,
    bio: document.getElementById("formBio").value.trim(),
    photo: appState.photoPreview || null
  };
  const mo = appState.modal;
  if (mo.type === "add") addMember(mo.parentId, data, false);
  else if (mo.type === "addWife") addMember(mo.parentId, { ...data, gender: "female" }, true);
  else if (mo.type === "addParent") addParentMember(data);
  else if (mo.type === "edit") editMember(mo.memberId, data);
  closeModal();
}
function closeModal() {
  document.getElementById("modalOverlay").classList.remove("visible");
  appState.modal = null;
}
function addMember(parentId, memberData, isWife) {
  const id = uid();
  const newMem = { id, wifeIds: [], childrenIds: [], ...memberData };
  appState.data.members[id] = newMem;
  if (parentId && !isWife) {
    const p = appState.data.members[parentId];
    if (p) p.childrenIds = [...(p.childrenIds || []), id];
  }
  if (parentId && isWife) {
    const p = appState.data.members[parentId];
    if (p) p.wifeIds = [...(p.wifeIds || []), id];
  }
  saveAndRefresh();
}
function editMember(id, memberData) {
  appState.data.members[id] = { ...appState.data.members[id], ...memberData };
  saveAndRefresh();
}
function deleteMember(id) {
  if (!confirm("حذف؟")) return;
  delete appState.data.members[id];
  for (const pid of Object.keys(appState.data.members)) {
    const m = appState.data.members[pid];
    if (m.childrenIds?.includes(id)) m.childrenIds = m.childrenIds.filter(c => c !== id);
    if (m.wifeIds?.includes(id)) m.wifeIds = m.wifeIds.filter(w => w !== id);
  }
  if (appState.selected === id) appState.selected = null;
  if (appState.openedDepth1 === id) appState.openedDepth1 = null;
  for (const [d, oid] of Object.entries(appState.openedByDepth)) {
    if (oid === id) { closeDepthAndBelow(Number(d)); break; }
  }
  saveAndRefresh();
}

// ========= INIT =========
window.addEventListener("resize", () => {
  if (appState.user) setTimeout(drawAllArrows, 120);
});
document.addEventListener("DOMContentLoaded", () => {
  autoLoginAsGuest();
  const adminSwitchBtn = document.getElementById("adminSwitchBtn");
  if (adminSwitchBtn) adminSwitchBtn.onclick = switchToAdmin;
});