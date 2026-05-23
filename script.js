const forbiddenSupplierWords = [
  "销量",
  "GMV",
  "搜索量",
  "热搜词",
  "热度",
  "排行榜",
  "平台热度",
  "评分",
];

const dimensions = [
  ["季节与节点", "开学季、换季、节假日、气温变化。"],
  ["平台适配", "不同经营平台下的款式偏好与详情页表达方式。"],
  ["款式元素", "版型、颜色、图案、领型、袖型、套装结构。"],
  ["人群需求", "年龄段、性别、穿着场景与宝妈购买偏好。"],
  ["内容传播", "短视频适合度、画面表现力、卖点传播性。"],
  ["原材料", "面料、辅料、舒适度、季节适配、成本友好度。"],
  ["价格带", "适合走量、利润款、引流款或形象款。"],
  ["供应链可行性", "是否易打样、易补货、易改色、易做系列款。"],
];

const styles = [
  {
    id: "cardigan",
    name: "学院风针织开衫套装",
    level: "强推荐",
    levelClass: "strong",
    age: "3-8岁",
    launch: "尽快上新",
    color: "#eaf3ff",
    accent: "#2f6eea",
    tags: ["学院风", "针织", "简约", "春季"],
    materials: ["精梳棉针织", "棉氨混纺", "双面针织", "罗纹收口"],
    advice: ["建议提前备布备料", "按常规版备货", "色系建议：浅色为主"],
    reasons: [
      ["需求动向", "家长注重舒适百搭的学院风穿搭，日常与出游场景适配性强。"],
      ["款式潜力", "开衫与内搭组合实用性高，细节设计耐看，具备持续吸引力。"],
      ["搭配场景", "易与多种单品组合搭配，覆盖上学、出游、家庭照等日常场景。"],
      ["季节适配", "春季温度适宜，针织面料舒适透气，符合季节穿着需求。"],
    ],
  },
  {
    id: "dress",
    name: "碎花荷叶边连衣裙",
    level: "强推荐",
    levelClass: "strong",
    age: "2-6岁",
    launch: "尽快上新",
    color: "#fff2f4",
    accent: "#e1788c",
    tags: ["甜美风", "碎花", "舒适", "春夏"],
    materials: ["棉粘混纺", "轻薄里布", "柔软蕾丝", "贝壳扣"],
    advice: ["优先打样粉色系", "准备亲子场景素材", "适合做系列款"],
    reasons: [
      ["人群需求", "低龄女童场景中，甜美、轻便、容易拍照的裙装接受度高。"],
      ["款式元素", "荷叶边与碎花元素识别度强，适合做详情页主视觉。"],
      ["内容传播", "裙摆动态效果适合短视频展示，能突出轻盈和童趣。"],
    ],
  },
  {
    id: "sunproof",
    name: "轻薄防晒外套",
    level: "可观察",
    levelClass: "watch",
    age: "4-10岁",
    launch: "可提前准备",
    color: "#eef8e9",
    accent: "#6bad45",
    tags: ["防晒", "轻薄", "运动风", "春夏"],
    materials: ["轻薄防晒布", "透气网眼布", "树脂拉链", "弹力包边"],
    advice: ["先做小批试款", "准备功能卖点图", "颜色以清爽系为主"],
    reasons: [
      ["季节与节点", "气温上行后，户外、通勤、亲子出游场景会带动轻薄外套需求。"],
      ["供应链可行性", "版型标准化程度高，便于改色、补货和形成亲子系列。"],
      ["原材料", "轻薄功能面料适合强调透气、防护和便携。"],
    ],
  },
  {
    id: "polo",
    name: "条纹POLO套装",
    level: "可观察",
    levelClass: "watch",
    age: "3-7岁",
    launch: "可提前准备",
    color: "#f8f0e4",
    accent: "#b88042",
    tags: ["条纹", "POLO", "休闲", "夏季"],
    materials: ["珠地棉", "罗纹领口", "亲肤汗布", "环保纽扣"],
    advice: ["优先做中性配色", "准备兄妹款组合", "详情页突出百搭"],
    reasons: [
      ["平台适配", "简洁中性风格适合多平台铺货，降低视觉理解成本。"],
      ["价格带", "基础款适合做走量款，也可通过面料升级形成利润款。"],
      ["款式元素", "条纹与POLO领具备稳定识别度，用户决策路径短。"],
    ],
  },
  {
    id: "cargo",
    name: "工装风夹克套装",
    level: "谨慎上新",
    levelClass: "careful",
    age: "4-9岁",
    launch: "谨慎上新",
    color: "#f0eee7",
    accent: "#8b7653",
    tags: ["工装风", "多口袋", "休闲", "春秋"],
    materials: ["棉斜纹布", "金属按扣", "加固织带", "耐磨口袋布"],
    advice: ["先做少量样衣", "控制配色复杂度", "注意版型轻量化"],
    reasons: [
      ["款式元素", "工装细节有辨识度，但低龄童装需要降低硬朗感。"],
      ["供应链可行性", "多口袋和辅料较多，打样与返单复杂度高。"],
      ["内容传播", "适合户外场景展示，但需要更完整的搭配素材。"],
    ],
  },
  {
    id: "hoodie",
    name: "印花卫衣套装",
    level: "谨慎上新",
    levelClass: "careful",
    age: "5-10岁",
    launch: "谨慎上新",
    color: "#f4f3fb",
    accent: "#6a74c9",
    tags: ["印花", "卫衣", "休闲", "春秋"],
    materials: ["毛圈棉", "螺纹袖口", "环保胶浆", "松紧腰头"],
    advice: ["印花先做两版测试", "避免过重面料", "详情页突出舒适"],
    reasons: [
      ["人群需求", "中大童更关注图案表达，但印花偏好变化较快。"],
      ["原材料", "面料手感和印花工艺会直接影响复购体验。"],
      ["价格带", "适合做利润款，需通过图案和版型拉开差异。"],
    ],
  },
];

function garmentSvg(item, compact = false) {
  const height = compact ? 106 : 160;
  return `
    <svg viewBox="0 0 260 ${height}" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="260" height="${height}" fill="${item.color}"/>
      <circle cx="42" cy="34" r="18" fill="#ffffff" opacity=".72"/>
      <circle cx="218" cy="40" r="24" fill="#ffffff" opacity=".55"/>
      <path d="M76 42c22-18 80-18 104 0l26 35-25 18-13-15v58H88V80L75 95 50 77l26-35Z" fill="#fff" stroke="${item.accent}" stroke-width="3" />
      <path d="M95 42c10 12 59 12 70 0" fill="none" stroke="${item.accent}" stroke-width="3" stroke-linecap="round"/>
      <path d="M103 74h54M100 98h60" stroke="${item.accent}" stroke-width="3" stroke-linecap="round" opacity=".75"/>
      <path d="M91 138h34l-8 30H83l8-30Zm45 0h34l8 30h-34l-8-30Z" fill="#d8e4f3" stroke="${item.accent}" stroke-width="3"/>
      <ellipse cx="70" cy="${height - 20}" rx="34" ry="8" fill="#20344d" opacity=".08"/>
      <ellipse cx="175" cy="${height - 20}" rx="40" ry="8" fill="#20344d" opacity=".08"/>
    </svg>`;
}

function renderCards() {
  const cards = document.getElementById("styleCards");
  cards.innerHTML = styles
    .map(
      (item, index) => `
      <button class="style-card ${index === 0 ? "active" : ""}" data-id="${item.id}">
        <div class="visual" style="--thumb-bg:${item.color}">
          <span class="level ${item.levelClass}">${item.level}</span>
          ${garmentSvg(item)}
        </div>
        <div class="card-body">
          <h3>${item.name}</h3>
          <div class="card-meta">
            <span>适合年龄：${item.age}</span>
            <span>建议上新：<b class="launch">${item.launch}</b></span>
          </div>
          <div class="tags">${item.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        </div>
      </button>`
    )
    .join("");

  cards.querySelectorAll(".style-card").forEach((card) => {
    card.addEventListener("click", () => {
      cards.querySelectorAll(".style-card").forEach((node) => node.classList.remove("active"));
      card.classList.add("active");
      setDetail(card.dataset.id);
    });
  });
}

function renderDimensions() {
  document.getElementById("dimensionGrid").innerHTML = dimensions
    .map(
      ([name, desc]) => `
        <div class="dimension-item">
          <strong>${name}</strong>
          <span>${desc}</span>
        </div>`
    )
    .join("");
}

function setDetail(id) {
  const item = styles.find((entry) => entry.id === id) || styles[0];
  document.getElementById("detailLevel").textContent = item.level;
  document.getElementById("detailName").textContent = item.name;
  document.getElementById("detailMeta").textContent = `适合年龄：${item.age}`;
  document.getElementById("detailLaunch").textContent = `建议上新：${item.launch}`;
  document.getElementById("detailVisual").innerHTML = garmentSvg(item, true);
  document.getElementById("detailMaterials").innerHTML = item.materials
    .map((material) => `<span>${material}</span>`)
    .join("");
  document.getElementById("detailAdvice").innerHTML = item.advice
    .map((advice) => `<span>${advice}</span>`)
    .join("");
  document.getElementById("detailReasons").innerHTML = item.reasons
    .map(
      ([title, desc], index) => `
        <div class="reason-card">
          <i>${index + 1}</i>
          <div>
            <strong>${title}</strong>
            <span>${desc}</span>
          </div>
        </div>`
    )
    .join("");
}

function bindTabs() {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((node) => node.classList.remove("active"));
      tab.classList.add("active");

      const period = tab.dataset.period;
      const hints = {
        7: "尽快上新",
        14: "可提前准备",
        30: "规划打样",
      };
      document.querySelector(".topbar p").textContent =
        `当前查看未来${period}天选款建议：只呈现预测结论、判断维度与备货动作。`;
      styles.forEach((style, index) => {
        if (period === "30") style.launch = index < 2 ? "规划打样" : "进入观察";
        if (period === "14") style.launch = index < 3 ? "可提前准备" : "谨慎上新";
        if (period === "7") style.launch = index < 2 ? "尽快上新" : hints[14];
      });
      renderCards();
      setDetail(styles[0].id);
    });
  });
}

function bindNav() {
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", () => {
      document.querySelectorAll(".nav-item").forEach((node) => node.classList.remove("active"));
      item.classList.add("active");
      const title = item.textContent.trim();
      document.querySelector(".topbar h1").textContent = title;
    });
  });
}

function auditSupplierCopy() {
  const visibleText = document.body.innerText;
  const found = forbiddenSupplierWords.filter((word) => visibleText.includes(word));
  if (found.length > 0) {
    console.warn("供应商端出现禁用数据词：", found.join("、"));
  }
}

renderCards();
renderDimensions();
setDetail(styles[0].id);
bindTabs();
bindNav();
document.getElementById("resetFilters").addEventListener("click", () => {
  document.querySelectorAll("select").forEach((select) => {
    select.selectedIndex = 0;
  });
});
auditSupplierCopy();
