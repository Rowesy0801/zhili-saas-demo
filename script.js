const supplierNav = [
  ["home", "预测首页"],
  ["library", "爆款款式库"],
  ["materials", "原材料建议"],
  ["detail", "商详制作"],
  ["video", "短视频制作"],
  ["custom", "AI定制"],
  ["billing", "订阅额度"],
];

const adminNav = [
  ["overview", "运营总览"],
  ["merchants", "商家管理"],
  ["onboarding", "入驻审核"],
  ["orders", "订阅订单"],
  ["tokens", "Token管理"],
  ["funnel", "转化漏斗"],
  ["tickets", "内容工单"],
  ["model", "数据模型监控"],
  ["import", "平台销量导入"],
];

const copy = {
  supplier: {
    label: "供应商端 SaaS",
    brand: "供应商端 SaaS",
    sub: "选款与内容生成工作台",
    desc: "未来 7/14/30 天款式预测、图片风格预测、商详图片生成与短视频提示词演示。",
  },
  admin: {
    label: "内部运营后台",
    brand: "内部运营后台",
    sub: "运营、数据、模型与工单管理",
    desc: "管理商家、套餐、Token、内容工单、平台销量导入、风格学习与模型监控。",
  },
};

const pageTitles = {
  supplier: {
    home: ["预测首页", "只展示预测结论、判断维度与行动建议，帮助档口快速决定是否打样上新。"],
    library: ["爆款款式库", "按子类目、年龄段、季节、面料与平台适配筛选预测款式。"],
    materials: ["原材料建议", "把款式趋势转成面料、颜色、克重、工艺和替代材料建议。"],
    detail: ["商详制作", "AI 商详图片工作台：从预测款式或多张照片生成符合流行风格的商品图片。"],
    video: ["短视频制作", "基于款式与风格预测生成短视频提示词、分镜和口播脚本。"],
    custom: ["AI定制", "按 Token 消耗生成 WEB、APP、短视频商详内容，并支持定制改写。"],
    billing: ["订阅额度", "查看套餐权益、Token 余额、充值和使用记录。"],
  },
  admin: {
    overview: ["运营总览", "内部查看商家经营、任务、数据链路和模型状态。"],
    merchants: ["商家管理", "管理商家档案、套餐状态、负责人和续费动作。"],
    onboarding: ["入驻审核", "处理商家入驻、试用开通、驳回原因和审核记录。"],
    orders: ["订阅订单", "管理套餐订单、账单状态、开票与续费。"],
    tokens: ["Token管理", "管理充值、扣减、冻结、免费额度和流水。"],
    funnel: ["转化漏斗", "跟进入驻、试用、活跃、付费、续费与流失预警。"],
    tickets: ["内容工单", "处理商详图片、短视频、AI定制生成与人工复核。"],
    model: ["数据模型监控", "查看预测版本、风格学习、模型效果和数据源状态。"],
    import: ["平台销量导入", "导入平台商品数据，为预测模型、风格学习和回看提供内部数据。"],
  },
};

const styles = [
  {
    id: "look-a",
    name: "清透学院风",
    level: "强推荐",
    age: "4-8岁",
    launch: "本周上新",
    c1: "#bfe8e3",
    c2: "#d7e9ff",
    tags: ["开学季", "舒适针织", "宝妈偏好", "易做系列"],
    materials: ["精梳棉针织", "柔软罗纹", "贝壳扣", "浅蓝/米白"],
    advice: ["先打 3 个色系小单", "主推套装与开衫组合", "优先准备 90-130 码"],
  },
  {
    id: "look-b",
    name: "户外机能套装",
    level: "强推荐",
    age: "7-12岁",
    launch: "10天内上新",
    c1: "#d9e8ff",
    c2: "#f6d6b8",
    tags: ["换季出游", "防晒轻薄", "短视频表现", "补货友好"],
    materials: ["轻薄防晒布", "网眼里布", "反光织带", "雾蓝/卡其"],
    advice: ["准备亲子外拍素材", "套装与单件同时上架", "库存按小批快返控制"],
  },
  {
    id: "look-c",
    name: "甜酷印花卫衣",
    level: "可观察",
    age: "6-10岁",
    launch: "两周内观察",
    c1: "#f2d0dd",
    c2: "#d6f1d0",
    tags: ["图案元素", "女孩场景", "内容传播", "引流款"],
    materials: ["棉氨毛圈", "水浆印花", "撞色螺纹", "樱粉/草绿"],
    advice: ["先做图案 AB 款", "控制首批深色比例", "搭配短裙做组合图"],
  },
];

const visualStyles = [
  {
    id: "studio",
    name: "明亮棚拍风",
    audience: "宝妈理性购买",
    platform: "淘宝/天猫",
    c1: "#eaf7f5",
    c2: "#dbeafe",
    reason: "突出面料质感、版型和尺码安全感，适合主图和 APP 商详首屏。",
  },
  {
    id: "school",
    name: "开学场景风",
    audience: "3-8岁儿童家庭",
    platform: "抖店/视频号",
    c1: "#dbeafe",
    c2: "#fff1c6",
    reason: "用教室、书包和明亮自然光强化场景代入，利于短视频和套装转化。",
  },
  {
    id: "outdoor",
    name: "轻户外生活风",
    audience: "周末出游家庭",
    platform: "拼多多/跨境",
    c1: "#dff5e1",
    c2: "#f4d0b5",
    reason: "突出耐穿、好活动、成套搭配，适合防晒服、外套和机能套装。",
  },
];

const state = {
  system: "supplier",
  section: "home",
  period: 7,
  selectedStyle: "look-a",
  selectedVisualStyle: "studio",
  token: 1260,
  uploaded: 2,
  generated: 3,
  promptVersion: 3,
  importValidated: false,
  importCommitted: false,
  ticketStatus: "待复核",
  funnelStage: "试用中",
};

const $ = (selector) => document.querySelector(selector);

function toast(message) {
  const node = $("#toast");
  node.textContent = message;
  node.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => node.classList.remove("show"), 1800);
}

function currentStyle() {
  return styles.find((item) => item.id === state.selectedStyle) || styles[0];
}

function currentVisualStyle() {
  return visualStyles.find((item) => item.id === state.selectedVisualStyle) || visualStyles[0];
}

function render() {
  renderShell();
  renderPage();
}

function renderShell() {
  const nav = state.system === "supplier" ? supplierNav : adminNav;
  $("#brandTitle").textContent = copy[state.system].brand;
  $("#brandSub").textContent = copy[state.system].sub;
  $("#systemLabel").textContent = copy[state.system].label;
  $("#brandTitle").textContent = copy[state.system].brand;
  $("#sideCardTitle").textContent = state.system === "supplier" ? "旗舰版试用中" : "今日待办";
  $("#sideCardText").textContent = state.system === "supplier" ? `Token 余额 ${state.token}` : "导入、工单、审核均可交互演示";
  $(".system-tab[data-system='supplier']").classList.toggle("active", state.system === "supplier");
  $(".system-tab[data-system='admin']").classList.toggle("active", state.system === "admin");
  $("#navList").innerHTML = nav.map(([id, label]) => `
    <button class="nav-item ${state.section === id ? "active" : ""}" data-nav="${id}">
      <span class="nav-dot"></span><span>${label}</span>
    </button>
  `).join("");
  const title = pageTitles[state.system][state.section];
  $("#pageTitle").textContent = title[0];
  $("#pageDesc").textContent = title[1];
  $("#primaryAction").textContent = state.system === "supplier" ? "生成商详图片" : "处理待办";
}

function renderPage() {
  const root = $("#pageRoot");
  if (state.system === "supplier") {
    root.innerHTML = supplierPages[state.section]();
  } else {
    root.innerHTML = adminPages[state.section]();
  }
}

function styleThumb(item, className = "thumb") {
  return `<div class="${className}" style="--c1:${item.c1};--c2:${item.c2}"></div>`;
}

function renderPredictionCards() {
  return styles.map((item) => `
    <article class="prediction-card ${state.selectedStyle === item.id ? "active" : ""}" data-action="select-style" data-id="${item.id}">
      ${styleThumb(item)}
      <div>
        <div class="card-head">
          <div>
            <h3>${item.name}</h3>
            <p>${item.age} · ${item.launch}</p>
          </div>
          <span class="status ${item.level === "强推荐" ? "strong" : "observe"}">${item.level}</span>
        </div>
        <div class="tag-row">${item.tags.map((tag) => `<span class="mini-tag">${tag}</span>`).join("")}</div>
      </div>
    </article>
  `).join("");
}

function renderStyleDetail() {
  const item = currentStyle();
  return `
    <aside class="detail-panel">
      <div class="card-head">
        <div>
          <h2>${item.name}</h2>
          <p>${item.age} · ${item.launch}</p>
        </div>
        <span class="status ${item.level === "强推荐" ? "strong" : "observe"}">${item.level}</span>
      </div>
      ${styleThumb(item, "style-visual")}
      <h3>核心预测维度</h3>
      <div class="tag-row">${item.tags.map((tag) => `<span class="mini-tag">${tag}</span>`).join("")}</div>
      <h3 style="margin-top:14px">原材料建议</h3>
      <div class="detail-list">${item.materials.map((m) => `<div class="detail-item">${m}</div>`).join("")}</div>
      <h3 style="margin-top:14px">备货动作</h3>
      <div class="detail-list">${item.advice.map((m) => `<div class="detail-item">${m}</div>`).join("")}</div>
      <div class="button-row" style="margin-top:14px">
        <button class="primary-btn" data-action="goto-detail">用此款生成商详图片</button>
        <button class="ghost-btn" data-action="goto-video">生成短视频提示词</button>
      </div>
    </aside>
  `;
}

const supplierPages = {
  home() {
    return `
      <section class="toolbar">
        <div class="segmented">
          ${[7, 14, 30].map((p) => `<button class="${state.period === p ? "active" : ""}" data-action="period" data-period="${p}">未来${p}天</button>`).join("")}
        </div>
        <div class="filter-row">
          <select data-action="filter"><option>全部品类</option><option>套装</option><option>外套</option><option>卫衣</option></select>
          <select data-action="filter"><option>全部年龄段</option><option>3-6岁</option><option>7-10岁</option></select>
          <button class="ghost-btn" data-action="supplier-filter">应用筛选</button>
        </div>
      </section>
      <section class="split">
        <div class="page-card">
          <div class="card-head">
            <div><h2>预测推荐款式</h2><p>当前周期：未来${state.period}天。页面只展示结论、维度和动作建议。</p></div>
            <span class="status strong">已脱敏展示</span>
          </div>
          <div class="detail-list">${renderPredictionCards()}</div>
        </div>
        ${renderStyleDetail()}
      </section>
    `;
  },
  library() {
    return `
      <section class="page-card">
        <div class="toolbar">
          <div class="filter-row">
            <select><option>童装套装</option><option>开衫外套</option><option>印花卫衣</option></select>
            <select><option>全部季节</option><option>春夏</option><option>秋冬</option></select>
            <select><option>全部价格带</option><option>引流款</option><option>利润款</option></select>
            <button class="primary-btn" data-action="supplier-filter">筛选款式</button>
          </div>
          <button class="ghost-btn" data-action="clear-selection">重置</button>
        </div>
        <div class="grid-3">${styles.map((item) => `
          <article class="style-card ${state.selectedStyle === item.id ? "active" : ""}" data-action="select-style" data-id="${item.id}">
            ${styleThumb(item, "style-visual")}
            <div class="style-card-body">
              <div class="card-head"><h3>${item.name}</h3><span class="status ${item.level === "强推荐" ? "strong" : "observe"}">${item.level}</span></div>
              <p>${item.age}，${item.launch}</p>
              <div class="tag-row">${item.tags.map((tag) => `<span class="mini-tag">${tag}</span>`).join("")}</div>
            </div>
          </article>`).join("")}</div>
      </section>
    `;
  },
  materials() {
    const item = currentStyle();
    return `
      <section class="grid-3">
        ${["面料组合", "颜色建议", "工艺与替代"].map((name, idx) => `
          <article class="page-card">
            <h2>${name}</h2>
            <p>${idx === 0 ? "围绕舒适度、季节适配和成本友好度给出采购建议。" : idx === 1 ? "颜色建议与款式风格、平台适配和消费人群联动。" : "便于小单打样、快速改色和系列化扩展。"}</p>
            <div class="detail-list">${item.materials.map((m) => `<div class="detail-item">${m}</div>`).join("")}</div>
            <button class="ghost-btn" data-action="copy-materials" style="margin-top:12px">加入采购清单</button>
          </article>
        `).join("")}
      </section>
    `;
  },
  detail() {
    const item = currentStyle();
    const visual = currentVisualStyle();
    return `
      <section class="workbench">
        <div class="page-card">
          <div class="toolbar">
            <div>
              <h2>AI 商详图片工作台</h2>
              <p>输入可以来自预测款式，也可以手动上传多张商品照片；系统会推荐当前流行图片风格并生成提示词。</p>
            </div>
            <div class="button-row">
              <button class="primary-btn" data-action="source-prediction">从预测款式生成</button>
              <button class="ghost-btn" data-action="upload-photo">上传多张照片</button>
            </div>
          </div>
          <div class="grid-3">
            <article class="style-card">
              ${styleThumb(item, "style-visual")}
              <div class="style-card-body"><h3>当前输入款式</h3><p>${item.name} · 已上传参考图 ${state.uploaded} 张</p></div>
            </article>
            ${visualStyles.map((style) => `
              <article class="style-card ${state.selectedVisualStyle === style.id ? "active" : ""}" data-action="select-visual-style" data-id="${style.id}">
                <div class="style-visual" style="--c1:${style.c1};--c2:${style.c2}"></div>
                <div class="style-card-body">
                  <div class="card-head"><h3>${style.name}</h3><span class="mini-tag">V${state.promptVersion}</span></div>
                  <p>${style.audience} · ${style.platform}</p>
                  <p>${style.reason}</p>
                </div>
              </article>
            `).join("")}
          </div>
          <div class="grid-2" style="margin-top:14px">
            <div class="prompt-box">
              <div class="card-head"><h3>商详图片提示词</h3><button class="ghost-btn" data-action="regen-prompt">重新生成</button></div>
              <pre>${imagePrompt(item, visual)}</pre>
            </div>
            <div class="prompt-box">
              <div class="card-head"><h3>视频生成提示词</h3><button class="ghost-btn" data-action="goto-video">去生成视频</button></div>
              <pre>${videoPrompt(item, visual)}</pre>
            </div>
          </div>
          <div class="card-head" style="margin-top:14px">
            <div><h2>生成结果</h2><p>可收藏、设为主图、继续微调，所有版本都会进入生成记录。</p></div>
            <button class="primary-btn" data-action="generate-images">生成一组图片</button>
          </div>
          <div class="result-grid">${renderResults()}</div>
        </div>
        ${renderChatPanel()}
      </section>
    `;
  },
  video() {
    const item = currentStyle();
    const visual = currentVisualStyle();
    return `
      <section class="grid-2">
        <article class="prompt-box">
          <div class="card-head"><h2>短视频提示词</h2><button class="primary-btn" data-action="generate-video">生成分镜</button></div>
          <pre>${videoPrompt(item, visual)}</pre>
        </article>
        <article class="page-card">
          <h2>分镜预览</h2>
          <div class="timeline">
            ${["3秒展示整套穿搭和场景", "8秒突出面料舒适和活动自由", "6秒展示细节、颜色和套装搭配", "5秒口播收束卖点并引导下单"].map((text, idx) => `
              <div class="timeline-item"><strong>镜头 ${idx + 1}</strong><p>${text}</p></div>
            `).join("")}
          </div>
        </article>
      </section>
    `;
  },
  custom() {
    return `
      <section class="grid-2">
        <article class="page-card">
          <h2>AI 定制生成</h2>
          <div class="segmented">
            <button class="active">WEB商详</button><button>APP商详</button><button>短视频商详</button>
          </div>
          <textarea id="customText">请围绕开学季、舒适面料、明亮棚拍风，生成一版适合宝妈购买决策的商详结构。</textarea>
          <div class="button-row" style="margin-top:12px">
            <button class="primary-btn" data-action="custom-generate">生成内容</button>
            <button class="ghost-btn" data-action="custom-polish">优化表达</button>
          </div>
        </article>
        <article class="prompt-box">
          <h2>生成预览</h2>
          <pre>主标题：舒适开学季针织套装\n模块：面料触感、活动场景、颜色搭配、尺码建议、洗护说明\n图片风格：明亮棚拍风 + 局部细节特写\n预计消耗：80 Token</pre>
        </article>
      </section>
    `;
  },
  billing() {
    return `
      <section class="grid-3">
        ${["基础版", "高级版", "旗舰版"].map((plan, idx) => `
          <article class="page-card">
            <h2>${plan}</h2>
            <p>${idx === 0 ? "爆款预测与款式详情" : idx === 1 ? "增加 WEB/APP 商详图片生成" : "增加短视频制作和多轮微调"}</p>
            <div class="progress"><span style="--w:${idx === 2 ? 78 : 42}%"></span></div>
            <button class="${idx === 2 ? "primary-btn" : "ghost-btn"}" data-action="upgrade-plan" style="margin-top:14px">${idx === 2 ? "当前套餐" : "升级"}</button>
          </article>
        `).join("")}
        <article class="page-card">
          <h2>Token 余额</h2>
          <p style="font-size:28px;color:var(--accent-dark);font-weight:800">${state.token}</p>
          <button class="primary-btn" data-action="recharge">充值 500 Token</button>
        </article>
      </section>
    `;
  },
};

function imagePrompt(item, visual) {
  return `为${item.age}童装「${item.name}」生成商详图片。风格：${visual.name}；人群：${visual.audience}；场景：明亮、干净、突出儿童穿着舒适感；构图：主图完整展示套装，辅图包含领口、袖口、面料细节；颜色：保持${item.materials[item.materials.length - 1]}；要求：统一光线、无杂乱背景、突出面料柔软与活动自由。`;
}

function videoPrompt(item, visual) {
  return `短视频围绕「${item.name}」生成，采用${visual.name}。镜头包含：穿搭出场、面料细节、活动场景、搭配组合、卖点口播。节奏轻快，画面明亮，适合${visual.platform}。`;
}

function renderResults() {
  return Array.from({ length: state.generated }).map((_, idx) => {
    const visual = currentVisualStyle();
    return `
      <article class="result-card">
        <div class="result-visual" style="--c1:${visual.c1};--c2:${visual.c2}"></div>
        <footer>
          <span>版本 ${idx + 1}</span>
          <button class="ghost-btn" data-action="favorite-result">收藏</button>
        </footer>
      </article>
    `;
  }).join("");
}

function renderChatPanel() {
  return `
    <aside class="chat-panel">
      <h2>对话式微调</h2>
      <p>员工可直接描述要改的细节，系统会保持当前流行风格并重新生成。</p>
      <div class="chat-log" id="chatLog">
        <div class="chat-bubble ai">已应用「${currentVisualStyle().name}」，可以继续调整背景、光线、模特姿势或细节角度。</div>
        <div class="chat-bubble user">背景换成开学季教室，光线更明亮。</div>
        <div class="chat-bubble ai">已生成新版本，并保留面料细节和主图构图。</div>
      </div>
      <textarea id="chatInput">把模特姿势改得更自然，增加书包和木色课桌。</textarea>
      <button class="primary-btn" data-action="chat-refine" style="width:100%;margin-top:10px">提交微调并生成</button>
    </aside>
  `;
}

const adminPages = {
  overview() {
    return `
      <section class="grid-4">
        ${[
          ["入驻商家", "128", "本周新增 12 家"],
          ["待处理工单", "23", "图片生成复核优先"],
          ["导入批次", "16", "2 个批次需查看错误报告"],
          ["风格版本", "9", "3 个版本灰度中"],
        ].map((m) => `<article class="metric-card"><h3>${m[0]}</h3><p style="font-size:28px;font-weight:800;color:var(--accent-dark)">${m[1]}</p><span class="muted">${m[2]}</span></article>`).join("")}
      </section>
      <section class="grid-2">
        <article class="page-card"><h2>今日待办</h2>${["审核 4 家新商家", "处理 6 条内容工单", "确认 1 个风格版本发布", "查看平台导入错误报告"].map((x) => `<div class="detail-item">${x}</div>`).join("")}</article>
        <article class="page-card"><h2>系统状态</h2><div class="detail-list">${["预测任务正常", "图片生成通道正常", "导入服务处理中", "消息通知正常"].map((x) => `<div class="detail-item">${x}</div>`).join("")}</div></article>
      </section>
    `;
  },
  merchants() {
    return tablePage("商家列表", ["商家", "产业带", "套餐", "负责人", "操作"], [
      ["织里贝贝衣橱", "湖州织里", "旗舰版", "周运营", button("续费", "merchant-renew")],
      ["童趣优选档口", "湖州织里", "高级版", "李客户成功", button("升级", "merchant-upgrade")],
      ["小鹿外贸童装", "广州", "试用中", "王运营", button("开通", "merchant-open")],
    ]);
  },
  onboarding() {
    return tablePage("入驻审核", ["商家", "提交资料", "意向套餐", "状态", "操作"], [
      ["织里云朵童装", "营业资料/档口照片", "高级版", "待审核", `${button("通过", "approve")} ${button("驳回", "reject", "danger-btn")}`],
      ["星禾童装供应链", "联系人/类目", "旗舰版", "补充资料", button("提醒补充", "remind")],
    ]);
  },
  orders() {
    return tablePage("订阅订单", ["订单号", "商家", "套餐", "状态", "操作"], [
      ["O-2026052501", "织里贝贝衣橱", "旗舰版年付", "待开票", button("开票", "invoice")],
      ["O-2026052408", "童趣优选档口", "高级版月付", "待续费", button("发送续费提醒", "renew-notice")],
    ]);
  },
  tokens() {
    return `
      <section class="grid-2">
        <article class="page-card"><h2>Token 调整</h2><select><option>织里贝贝衣橱</option><option>童趣优选档口</option></select><input value="500" style="width:100%;margin:10px 0" /><div class="button-row"><button class="primary-btn" data-action="admin-recharge">充值</button><button class="ghost-btn" data-action="admin-free-reset">重置免费额度</button></div></article>
        <article class="page-card"><h2>流水记录</h2>${["商详图片生成 -80", "视频提示词生成 -50", "人工充值 +500", "每日免费额度 +30"].map((x) => `<div class="detail-item">${x}</div>`).join("")}</article>
      </section>
    `;
  },
  funnel() {
    return `
      <section class="page-card">
        <div class="segmented">${["线索", "已入驻", "试用中", "已付费", "续费预警"].map((x) => `<button class="${state.funnelStage === x ? "active" : ""}" data-action="funnel" data-stage="${x}">${x}</button>`).join("")}</div>
        <div class="grid-4" style="margin-top:14px">${["线索收集", "入驻审核", "试用激活", "付费续费"].map((x, i) => `<article class="metric-card"><h3>${x}</h3><div class="progress"><span style="--w:${35 + i * 18}%"></span></div><p>${state.funnelStage}阶段客户跟进中</p></article>`).join("")}</div>
      </section>
    `;
  },
  tickets() {
    return tablePage("内容工单", ["工单", "类型", "商家", "状态", "操作"], [
      ["T-10081", "商详图片", "织里贝贝衣橱", state.ticketStatus, `${button("流转状态", "ticket-next")} ${button("查看", "ticket-view")}`],
      ["T-10082", "短视频提示词", "童趣优选档口", "生成中", button("催办", "ticket-remind")],
      ["T-10083", "风格微调", "小鹿外贸童装", "待复核", button("复核通过", "ticket-pass")],
    ]);
  },
  model() {
    return `
      <section class="grid-2">
        <article class="page-card">
          <h2>预测与风格学习</h2>
          ${["预测版本 V2026.05.25", "风格档案 9 个", "提示词模板 18 个", "学习样本 426 条"].map((x, i) => `<div class="detail-item">${x}<div class="progress" style="margin-top:8px"><span style="--w:${52 + i * 9}%"></span></div></div>`).join("")}
        </article>
        <article class="page-card">
          <h2>风格库操作</h2>
          <div class="detail-list">${visualStyles.map((s) => `<div class="detail-item"><strong>${s.name}</strong><p>${s.reason}</p><button class="ghost-btn" data-action="publish-style">发布新版本</button></div>`).join("")}</div>
        </article>
      </section>
    `;
  },
  import() {
    return `
      <section class="grid-2">
        <article class="page-card">
          <h2>平台销量导入</h2>
          <div class="filter-row"><select><option>淘宝/天猫</option><option>拼多多</option><option>抖店</option><option>SHEIN</option></select><button class="ghost-btn" data-action="download-template">下载模板</button></div>
          <div class="detail-item" style="margin:12px 0">拖拽或点击上传 .xlsx / .csv；大文件会自动分片并生成导入任务。</div>
          <div class="button-row"><button class="primary-btn" data-action="validate-import">校验文件</button><button class="ghost-btn" data-action="commit-import">确认入库</button></div>
        </article>
        <article class="page-card">
          <h2>校验结果</h2>
          <div class="grid-4">
            ${[
              ["总行数", state.importValidated ? "1280" : "--"],
              ["有效行", state.importValidated ? "1216" : "--"],
              ["失败行", state.importValidated ? "42" : "--"],
              ["重复行", state.importValidated ? "22" : "--"],
            ].map((x) => `<div class="metric-card"><h3>${x[0]}</h3><p style="font-size:24px;font-weight:800">${x[1]}</p></div>`).join("")}
          </div>
          <p class="muted">${state.importCommitted ? "已入库，数据仅进入内部预测数据池。" : "校验后可下载错误报告，并选择跳过、覆盖或人工合并。"}</p>
        </article>
      </section>
      ${tablePage("导入记录", ["批次", "平台", "导入人", "状态", "操作"], [
        ["B-0525-01", "淘宝/天猫", "数据运营A", state.importCommitted ? "已完成" : "待确认", button("下载错误报告", "error-report")],
        ["B-0524-03", "抖店", "数据运营B", "部分失败", button("查看明细", "import-detail")],
      ], true)}
    `;
  },
};

function button(label, action, cls = "ghost-btn") {
  return `<button class="${cls}" data-action="${action}">${label}</button>`;
}

function tablePage(title, headers, rows, innerOnly = false) {
  const html = `
    <section class="table-card">
      <div class="card-head"><h2>${title}</h2><button class="primary-btn" data-action="table-refresh">刷新</button></div>
      <table class="data-table">
        <thead><tr>${headers.map((h) => `<th>${h}</th>`).join("")}</tr></thead>
        <tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody>
      </table>
    </section>
  `;
  return innerOnly ? html : html;
}

document.addEventListener("click", (event) => {
  const systemTab = event.target.closest("[data-system]");
  if (systemTab) {
    state.system = systemTab.dataset.system;
    state.section = state.system === "supplier" ? "home" : "overview";
    render();
    return;
  }

  const nav = event.target.closest("[data-nav]");
  if (nav) {
    state.section = nav.dataset.nav;
    render();
    return;
  }

  const actionEl = event.target.closest("[data-action]");
  if (!actionEl) return;
  const action = actionEl.dataset.action;

  if (action === "period") {
    state.period = Number(actionEl.dataset.period);
    toast(`已切换到未来${state.period}天预测`);
  } else if (action === "select-style") {
    state.selectedStyle = actionEl.dataset.id;
  } else if (action === "select-visual-style") {
    state.selectedVisualStyle = actionEl.dataset.id;
    toast("已应用新的商详图片风格");
  } else if (action === "goto-detail") {
    state.section = "detail";
  } else if (action === "goto-video") {
    state.section = "video";
  } else if (action === "upload-photo") {
    state.uploaded = Math.min(9, state.uploaded + 1);
    toast(`已模拟上传 ${state.uploaded} 张参考图`);
  } else if (action === "regen-prompt") {
    state.promptVersion += 1;
    toast("已根据当前风格重新生成提示词");
  } else if (action === "generate-images") {
    state.generated = Math.min(6, state.generated + 1);
    state.token = Math.max(0, state.token - 80);
    toast("已生成新一组商详图片");
  } else if (action === "chat-refine") {
    state.generated = Math.min(6, state.generated + 1);
    state.token = Math.max(0, state.token - 60);
    toast("已根据对话要求生成微调版本");
  } else if (action === "recharge") {
    state.token += 500;
    toast("已模拟充值 500 Token");
  } else if (action === "validate-import") {
    state.importValidated = true;
    toast("文件校验完成，可查看错误报告");
  } else if (action === "commit-import") {
    if (!state.importValidated) {
      toast("请先校验文件");
    } else {
      state.importCommitted = true;
      toast("有效数据已进入内部预测数据池");
    }
  } else if (action === "ticket-next") {
    state.ticketStatus = state.ticketStatus === "待复核" ? "已交付" : "待复核";
    toast("工单状态已更新");
  } else if (action === "funnel") {
    state.funnelStage = actionEl.dataset.stage;
  } else if (action === "admin-recharge") {
    toast("已为商家充值并生成流水");
  } else if (action === "download-template") {
    toast("已模拟下载标准模板");
  } else if (action === "demoReset") {
    resetState();
  } else {
    toast("演示操作已完成");
  }
  render();
});

$("#demoReset").addEventListener("click", resetState);
$("#primaryAction").addEventListener("click", () => {
  if (state.system === "supplier") {
    state.section = "detail";
    toast("已进入 AI 商详图片工作台");
  } else {
    state.section = "tickets";
    toast("已进入内容工单处理");
  }
  render();
});

function resetState() {
  state.system = "supplier";
  state.section = "home";
  state.period = 7;
  state.selectedStyle = "look-a";
  state.selectedVisualStyle = "studio";
  state.token = 1260;
  state.uploaded = 2;
  state.generated = 3;
  state.promptVersion = 3;
  state.importValidated = false;
  state.importCommitted = false;
  state.ticketStatus = "待复核";
  state.funnelStage = "试用中";
  toast("演示数据已重置");
  render();
}

render();
