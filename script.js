const POINT_RULE = {
  image: 2,
  video: 20,
};

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

const systemCopy = {
  supplier: {
    label: "供应商端 SaaS",
    brand: "供应商端",
    sub: "预测与内容生成工作台",
    desc: "查看未来 7/14/30 天可能起量的款式，并进入商详套图与短视频生成。",
  },
  admin: {
    label: "内部运营后台",
    brand: "内部后台",
    sub: "导入、模型、商家与积分管理",
    desc: "所有进入系统的数据均从后台管理导入，供应商端只消费预测结论和生成能力。",
  },
};

const pageTitles = {
  supplier: {
    home: ["预测首页", "按产业带、类目和周期查看推荐款式，只展示预测结论、判断维度和行动建议。"],
    library: ["爆款款式库", "按产业带、服装类目、周期和推荐等级筛选可上新款式。"],
    materials: ["原材料建议", "把预测款式转成面料、辅料、颜色、工艺和备货建议。"],
    detail: ["商详制作", "导入预测款式或多张照片，选择多套风格生成商详套图，并支持对话微调。"],
    video: ["短视频制作", "基于款式和目标风格生成短视频提示词、分镜和演示视频。"],
    custom: ["AI定制", "按业务目标定制生成 WEB、APP、商详套图和短视频内容。"],
    billing: ["订阅额度", "查看套餐、积分余额、充值和生成消耗记录。"],
  },
  admin: {
    overview: ["运营总览", "同步商家、导入任务、内容工单和模型任务状态。"],
    merchants: ["商家管理", "管理产业带商家、负责人、套餐和跟进状态。"],
    onboarding: ["入驻审核", "处理商家入驻、试用开通、驳回原因和审核记录。"],
    orders: ["订阅订单", "管理套餐订单、账单状态、开票和续费提醒。"],
    tokens: ["Token管理", "管理积分充值、扣减、冻结、赠送和流水记录。"],
    funnel: ["转化漏斗", "跟进线索、试用、活跃、付费、续费和流失预警。"],
    tickets: ["内容工单", "处理商详套图、短视频和 AI 定制生成的人审与交付。"],
    model: ["数据模型监控", "查看款式预测、风格学习、提示词版本和生成反馈。"],
    import: ["平台销量导入", "导入平台销售、商详图片、短视频样本和产业带类目配置。"],
  },
};

const industries = [
  {
    id: "zhili",
    name: "湖州织里",
    scope: "童装产业带",
    categories: [
      { id: "children", name: "童装" },
    ],
  },
  {
    id: "changshu",
    name: "常熟服装",
    scope: "综合服装产业带",
    categories: [
      { id: "women", name: "女装" },
      { id: "men", name: "男装" },
      { id: "elder", name: "老年装" },
    ],
  },
];

const styleItems = [
  {
    id: "zhili-kids-cardigan",
    industry: "zhili",
    category: "children",
    name: "连帽撞色针织开衫",
    level: "强推荐",
    audience: "女童 3-8 岁",
    launch: "未来7天",
    photoLabel: "童装",
    c1: "#bfe8e3",
    c2: "#dcecff",
    dimensions: ["季节节点", "款式元素", "人群需求", "内容传播", "原材料", "供应链可行性"],
    materials: ["精梳棉针织", "亲肤罗纹", "树脂纽扣", "奶白/浅蓝/粉绿"],
    advice: ["先做 3 色小批量", "尺码覆盖 90-130", "主图突出穿脱方便与柔软触感"],
    reason: "适合开学和换季场景，版型安全、改色空间大，适合做成套系上新。",
  },
  {
    id: "zhili-kids-outdoor",
    industry: "zhili",
    category: "children",
    name: "轻户外防晒套装",
    level: "强推荐",
    audience: "男童 6-12 岁",
    launch: "未来14天",
    photoLabel: "童装",
    c1: "#d8e8ff",
    c2: "#f6d7b9",
    dimensions: ["季节节点", "平台适配", "内容传播", "价格带", "供应链可行性"],
    materials: ["轻薄防晒布", "网眼里布", "反光织带", "雾蓝/卡其"],
    advice: ["套装与单件同时上架", "先准备外拍场景素材", "库存按小批快返控制"],
    reason: "适合周末出游和亲子活动表达，画面表现力强，适合短视频讲解。",
  },
  {
    id: "zhili-kids-sweet",
    industry: "zhili",
    category: "children",
    name: "甜酷印花卫衣",
    level: "可观察",
    audience: "女童 6-10 岁",
    launch: "未来30天",
    photoLabel: "童装",
    c1: "#f2d0dd",
    c2: "#d8f0cf",
    dimensions: ["款式元素", "人群需求", "内容传播", "价格带"],
    materials: ["棉氨毛圈", "水浆印花", "撞色螺纹", "樱粉/草绿"],
    advice: ["先做图案 A/B 款", "搭配短裙生成组合图", "控制首批深色比例"],
    reason: "适合做引流款和组合穿搭内容，建议先用小批量验证。",
  },
  {
    id: "changshu-women-commute",
    industry: "changshu",
    category: "women",
    name: "软糯针织开衫外套",
    level: "强推荐",
    audience: "女性 25-35 岁",
    launch: "未来7天",
    photoLabel: "女装",
    c1: "#f7d5df",
    c2: "#d9e7ff",
    dimensions: ["季节节点", "平台适配", "款式元素", "价格带", "内容传播"],
    materials: ["粘纤混纺", "细密罗纹", "仿贝纽扣", "燕麦/雾粉"],
    advice: ["强调通勤与约会两用", "建议做半身裙搭配图", "准备同面料内搭系列"],
    reason: "适配轻通勤消费人群，细节质感和套系组合对转化更友好。",
  },
  {
    id: "changshu-men-jacket",
    industry: "changshu",
    category: "men",
    name: "工装多口袋夹克",
    level: "中高潜力",
    audience: "男性 20-40 岁",
    launch: "未来14天",
    photoLabel: "男装",
    c1: "#d8d4c6",
    c2: "#aeb8b2",
    dimensions: ["平台适配", "款式元素", "供应链可行性", "价格带"],
    materials: ["斜纹棉布", "金属拉链", "加固织带", "卡其/军绿"],
    advice: ["主图突出廓形与口袋功能", "裤装搭配成套展示", "先做中性基础色"],
    reason: "功能感和基础色更利于跨平台表达，适合作为利润款观察。",
  },
  {
    id: "changshu-elder-jacket",
    industry: "changshu",
    category: "elder",
    name: "国风盘扣妈妈装上衣",
    level: "强推荐",
    audience: "女性 50 岁以上",
    launch: "未来7天",
    photoLabel: "老年装",
    c1: "#e6c1bd",
    c2: "#d8e7d5",
    dimensions: ["人群需求", "款式元素", "原材料", "供应链可行性"],
    materials: ["提花棉麻", "盘扣辅料", "柔软包边", "豆沙红/墨绿"],
    advice: ["强调体面、舒适、遮肉", "模特图使用家庭场景", "备货优先覆盖 L-3XL"],
    reason: "消费人群关注穿着舒适和体面感，适合用场景化商详承接转化。",
  },
];

const visualStyles = [
  {
    id: "live-clean",
    name: "清爽直播风",
    audience: "理性下单人群",
    scene: "白底、自然光、细节特写",
    c1: "#e4f7f8",
    c2: "#dcecff",
    prompt: "清爽白底直播间氛围，模特自然站姿，衣服细节清晰，面料纹理可见，画面干净明亮，适合商品主图和商详首屏。",
  },
  {
    id: "commute",
    name: "高转化通勤风",
    audience: "通勤与日常穿搭人群",
    scene: "街景、咖啡店、轻生活方式",
    c1: "#f2dae1",
    c2: "#e8eef6",
    prompt: "轻通勤生活方式场景，模特自然行走，色彩柔和，突出搭配完整度和质感，画面适合女性服饰商详套图。",
  },
  {
    id: "family",
    name: "家庭场景风",
    audience: "家庭决策人群",
    scene: "客厅、亲子、温暖自然光",
    c1: "#f8e4c7",
    c2: "#dff2df",
    prompt: "温暖家庭生活场景，自然光，人物表情放松，突出舒适、安全、好打理，适合童装和中老年服饰内容表达。",
  },
  {
    id: "studio",
    name: "简约棚拍风",
    audience: "看重版型和细节的人群",
    scene: "纯色背景、正侧背多角度",
    c1: "#e8edf3",
    c2: "#d8e4ed",
    prompt: "简约棚拍，纯色背景，正面、侧面、背面和细节局部成套输出，重点表现版型、颜色和工艺细节。",
  },
];

const importSources = [
  { id: "sales", name: "平台销售数据", desc: "用于款式预测、回看与模型训练" },
  { id: "images", name: "高转化商详图片", desc: "用于商详风格学习和提示词更新" },
  { id: "videos", name: "短视频样本", desc: "用于视频风格、分镜和口播学习" },
  { id: "config", name: "产业带/类目配置", desc: "用于扩展织里、常熟等产业带" },
];

const initialState = {
  system: "supplier",
  section: "home",
  industry: "zhili",
  category: "children",
  period: 7,
  selectedStyle: "zhili-kids-cardigan",
  selectedVisual: "live-clean",
  points: 12860,
  imageCount: 6,
  videoCount: 1,
  uploadedPhotos: 3,
  generationBatch: 1,
  fineTuneNotes: ["已根据当前款式生成基础提示词。"],
  usageRecords: [
    { type: "商详套图", item: "连帽撞色针织开衫", cost: 12, time: "今天 10:24" },
    { type: "短视频", item: "轻户外防晒套装", cost: 20, time: "昨天 16:42" },
  ],
  importSource: "sales",
  importIndustry: "zhili",
  importCategory: "children",
  importPlatform: "抖店",
  importValidated: false,
  importCommitted: false,
  importBatch: 6,
  ticketStatus: "待复核",
  modelVersion: "V2.4",
};

const state = { ...initialState, usageRecords: [...initialState.usageRecords], fineTuneNotes: [...initialState.fineTuneNotes] };

const $ = (selector) => document.querySelector(selector);
const formatNumber = (number) => Number(number).toLocaleString("zh-CN");

function currentIndustry() {
  return industries.find((item) => item.id === state.industry) || industries[0];
}

function currentImportIndustry() {
  return industries.find((item) => item.id === state.importIndustry) || industries[0];
}

function availableCategories(industryId = state.industry) {
  return (industries.find((item) => item.id === industryId) || industries[0]).categories;
}

function visibleStyles() {
  return styleItems.filter((item) => {
    const periodMatch = state.period === 30 || item.launch.includes(String(state.period));
    return item.industry === state.industry && item.category === state.category && periodMatch;
  });
}

function currentStyle() {
  return styleItems.find((item) => item.id === state.selectedStyle) || styleItems[0];
}

function currentVisualStyle() {
  return visualStyles.find((item) => item.id === state.selectedVisual) || visualStyles[0];
}

function generationCost() {
  return state.imageCount * POINT_RULE.image + state.videoCount * POINT_RULE.video;
}

function toast(message) {
  const node = $("#toast");
  node.textContent = message;
  node.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => node.classList.remove("show"), 1800);
}

function levelClass(level) {
  if (level === "强推荐") return "strong";
  if (level === "可观察" || level === "中高潜力") return "observe";
  return "caution";
}

function thumb(item, className = "product-thumb") {
  return `
    <div class="${className}" style="--c1:${item.c1};--c2:${item.c2}">
      <span class="thumb-caption">${item.photoLabel || item.name}</span>
    </div>
  `;
}

function styleThumb(style, className = "output-thumb") {
  return `<div class="${className}" style="--c1:${style.c1};--c2:${style.c2}"></div>`;
}

function render() {
  renderShell();
  renderPage();
}

function renderShell() {
  const copy = systemCopy[state.system];
  const nav = state.system === "supplier" ? supplierNav : adminNav;
  const [title, desc] = pageTitles[state.system][state.section];

  $("#brandTitle").textContent = copy.brand;
  $("#brandSub").textContent = copy.sub;
  $("#systemLabel").textContent = copy.label;
  $("#pageTitle").textContent = title;
  $("#pageDesc").textContent = desc;
  $("#primaryAction").textContent = state.system === "supplier" ? "开始生成" : "处理待办";

  document.querySelectorAll(".system-tab").forEach((button) => {
    button.classList.toggle("active", button.dataset.system === state.system);
  });

  $("#navList").innerHTML = nav.map(([id, label]) => `
    <button class="nav-item ${state.section === id ? "active" : ""}" type="button" data-nav="${id}">
      <span class="nav-dot"></span>
      <span>${label}</span>
    </button>
  `).join("");

  if (state.system === "supplier") {
    $("#sideCardTitle").textContent = "当前积分";
    $("#sideCardValue").textContent = formatNumber(state.points);
    $("#sideCardText").textContent = "图片 2 积分/张，视频 20 积分/段";
    $("#sideCard .sidebar-btn").textContent = "充值";
  } else {
    $("#sideCardTitle").textContent = "后台待办";
    $("#sideCardValue").textContent = "12";
    $("#sideCardText").textContent = "导入、工单、审核均可演示";
    $("#sideCard .sidebar-btn").textContent = "查看总览";
  }
}

function renderPage() {
  const root = $("#pageRoot");
  const pages = state.system === "supplier" ? supplierPages : adminPages;
  root.innerHTML = pages[state.section]();
}

function industryFilters() {
  const categories = availableCategories();
  return `
    <div class="filter-bar">
      <div class="filter-group">
        <label>产业带</label>
        <div class="segmented">
          ${industries.map((item) => `<button class="chip ${state.industry === item.id ? "active" : ""}" type="button" data-action="set-industry" data-id="${item.id}">${item.name}</button>`).join("")}
        </div>
      </div>
      <div class="filter-group">
        <label>类目</label>
        <div class="segmented">
          ${categories.map((item) => `<button class="chip ${state.category === item.id ? "active" : ""}" type="button" data-action="set-category" data-id="${item.id}">${item.name}</button>`).join("")}
        </div>
      </div>
      <div class="filter-group">
        <label>周期</label>
        <div class="segmented">
          ${[7, 14, 30].map((period) => `<button class="chip ${state.period === period ? "active" : ""}" type="button" data-action="set-period" data-id="${period}">未来${period}天</button>`).join("")}
        </div>
      </div>
    </div>
  `;
}

function productCard(item) {
  return `
    <article class="product-card ${state.selectedStyle === item.id ? "active" : ""}" data-action="select-style" data-id="${item.id}">
      ${thumb(item)}
      <div class="product-card-body">
        <div class="product-title">
          <div>
            <h3>${item.name}</h3>
            <p>${item.audience} · ${item.launch}</p>
          </div>
          <span class="status ${levelClass(item.level)}">${item.level}</span>
        </div>
        <div class="tag-row">${item.dimensions.slice(0, 5).map((tag) => `<span class="mini-tag">${tag}</span>`).join("")}</div>
      </div>
    </article>
  `;
}

function productCards(items = visibleStyles()) {
  const list = items.length ? items : styleItems.filter((item) => item.industry === state.industry && item.category === state.category);
  return `<div class="product-grid">${list.map(productCard).join("")}</div>`;
}

function selectedStylePanel() {
  const item = currentStyle();
  return `
    <div class="panel">
      <div class="panel-head">
        <div>
          <h2>款式详情与行动建议</h2>
          <p>供应商端只展示可执行结论，不展示底层明细数据。</p>
        </div>
        <span class="status ${levelClass(item.level)}">${item.level}</span>
      </div>
      <div class="detail-layout">
        ${thumb(item)}
        <div>
          <h2>${item.name}</h2>
          <p class="muted" style="margin-top:6px">${item.audience} · 建议上新：${item.launch}</p>
          <p class="muted" style="margin-top:10px">${item.reason}</p>
          <div class="tag-row" style="margin-top:12px">
            ${item.dimensions.map((tag) => `<span class="mini-tag accent">${tag}</span>`).join("")}
          </div>
          <div class="dimension-list" style="margin-top:14px">
            <div class="dimension-item"><b>原材料</b><span>${item.materials.join("、")}</span></div>
            <div class="dimension-item"><b>备货建议</b><span>${item.advice.join("；")}</span></div>
            <div class="dimension-item"><b>生成入口</b><span>可直接带入商详套图和短视频制作，生成前会预估积分消耗。</span></div>
          </div>
          <div class="action-row" style="margin-top:14px">
            <button class="primary-btn" type="button" data-action="go-detail">用此款生成商详套图</button>
            <button class="soft-btn" type="button" data-action="go-video">生成短视频方案</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

const supplierPages = {
  home() {
    return `
      ${industryFilters()}
      <div class="grid two">
        <div class="panel">
          <div class="panel-head">
            <div>
              <h2>推荐爆款款式</h2>
              <p>${currentIndustry().name} · ${availableCategories().find((item) => item.id === state.category).name} · 未来${state.period}天</p>
            </div>
            <button class="ghost-btn" type="button" data-action="export-prediction">导出推荐结果</button>
          </div>
          ${productCards()}
        </div>
        ${selectedStylePanel()}
      </div>
    `;
  },
  library() {
    const items = styleItems.filter((item) => item.industry === state.industry && item.category === state.category);
    return `
      ${industryFilters()}
      <div class="panel">
        <div class="panel-head">
          <div>
            <h2>款式库</h2>
            <p>切换产业带和类目，查看可用于选款、打样、备货和内容生成的款式。</p>
          </div>
          <div class="tag-row">
            <span class="mini-tag accent">强推荐</span>
            <span class="mini-tag">可观察</span>
            <span class="mini-tag">谨慎上新</span>
          </div>
        </div>
        ${productCards(items)}
      </div>
    `;
  },
  materials() {
    const items = styleItems.filter((item) => item.industry === state.industry);
    return `
      ${industryFilters()}
      <div class="panel">
        <div class="panel-head">
          <div>
            <h2>原材料建议</h2>
            <p>按款式输出面料、辅料、颜色和备货动作，帮助档口快速落到打样。</p>
          </div>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr><th>款式</th><th>适配人群</th><th>推荐材料</th><th>颜色方向</th><th>备货动作</th><th>操作</th></tr>
            </thead>
            <tbody>
              ${items.map((item) => `
                <tr>
                  <td>${item.name}</td>
                  <td>${item.audience}</td>
                  <td>${item.materials.slice(0, 3).join("、")}</td>
                  <td>${item.materials[item.materials.length - 1]}</td>
                  <td>${item.advice[0]}</td>
                  <td><button class="soft-btn" type="button" data-action="select-style" data-id="${item.id}">查看</button></td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },
  detail() {
    const item = currentStyle();
    const style = currentVisualStyle();
    const totalCost = generationCost();
    return `
      <div class="workbench">
        <div class="panel source-box">
          <div class="panel-head">
            <div>
              <h2>输入来源</h2>
              <p>可从预测款式带入，也可上传多张实拍图。</p>
            </div>
          </div>
          <div class="selected-source">
            ${thumb(item, "mini-thumb")}
            <div>
              <h3>${item.name}</h3>
              <p class="muted">${item.audience} · ${item.launch}</p>
              <button class="soft-btn" style="margin-top:8px" type="button" data-action="go-home">更换预测款式</button>
            </div>
          </div>
          <div class="upload-strip">
            ${Array.from({ length: state.uploadedPhotos }).map((_, index) => `<div class="upload-tile">已上传<br>照片${index + 1}</div>`).join("")}
            <button class="upload-tile" type="button" data-action="upload-photo">+<br>上传图片</button>
          </div>
          <button class="ghost-btn" type="button" data-action="clear-upload">清空上传</button>
        </div>

        <div class="panel prompt-box">
          <div class="panel-head">
            <div>
              <h2>商详风格预测与提示词</h2>
              <p>选择风格后生成商详套图与视频提示词，员工可通过对话继续微调。</p>
            </div>
          </div>
          <div class="style-grid">
            ${visualStyles.map((visual) => `
              <article class="style-option ${state.selectedVisual === visual.id ? "active" : ""}" data-action="set-visual" data-id="${visual.id}">
                <div class="style-preview" style="--c1:${visual.c1};--c2:${visual.c2}"></div>
                <h3>${visual.name}</h3>
                <p>${visual.scene}</p>
              </article>
            `).join("")}
          </div>
          <div class="prompt-editor">
            <label class="small-note">商详图片提示词</label>
            <textarea id="promptInput">${style.prompt} 款式为${item.name}，目标人群为${item.audience}，需要输出主图、场景图、细节图、尺码说明图。</textarea>
            <label class="small-note">视频提示词</label>
            <textarea id="videoPromptInput">${style.name}短视频，前3秒展示穿着效果，中段展示面料细节和搭配，结尾引导查看同系列款式。</textarea>
          </div>
          <div class="chat-box">
            <div class="chat-log">
              ${state.fineTuneNotes.map((note, index) => `<div class="bubble ${index % 2 ? "user" : ""}">${note}</div>`).join("")}
            </div>
            <div class="toolbar-row">
              <input id="fineTuneInput" placeholder="输入调整要求，例如：背景更像常熟女装通勤场景" />
              <button class="soft-btn" type="button" data-action="add-finetune">发送调整</button>
            </div>
          </div>
        </div>

        <div class="panel cost-box">
          <div class="panel-head">
            <div>
              <h2>积分与消耗</h2>
              <p>积分价格由后台按模型 token 成本配置。</p>
            </div>
          </div>
          <div class="cost-line"><span>当前积分</span><strong>${formatNumber(state.points)}</strong></div>
          <div class="cost-line"><span>图片</span><strong>${POINT_RULE.image} 积分/张</strong></div>
          <div class="cost-line"><span>视频</span><strong>${POINT_RULE.video} 积分/段</strong></div>
          <div class="cost-line">
            <span>套图张数</span>
            <span class="stepper">
              <button type="button" data-action="image-minus">-</button>
              <strong>${state.imageCount}</strong>
              <button type="button" data-action="image-plus">+</button>
            </span>
          </div>
          <div class="cost-line">
            <span>视频段数</span>
            <span class="stepper">
              <button type="button" data-action="video-minus">-</button>
              <strong>${state.videoCount}</strong>
              <button type="button" data-action="video-plus">+</button>
            </span>
          </div>
          <div class="cost-line"><span>预计消耗</span><strong>${totalCost} 积分</strong></div>
          <button class="primary-btn" style="width:100%;margin-top:14px" type="button" data-action="generate-detail">开始生成</button>
          <button class="ghost-btn" style="width:100%;margin-top:8px" type="button" data-action="go-billing">查看充值</button>
        </div>
      </div>
      ${generatedOutputs()}
    `;
  },
  video() {
    const item = currentStyle();
    const style = currentVisualStyle();
    return `
      <div class="grid two">
        <div class="panel">
          <div class="panel-head">
            <div>
              <h2>短视频生成</h2>
              <p>从款式和风格生成脚本、分镜与演示视频，每段消耗 ${POINT_RULE.video} 积分。</p>
            </div>
            <span class="status strong">${formatNumber(state.points)} 积分</span>
          </div>
          <div class="selected-source">
            ${thumb(item, "mini-thumb")}
            <div>
              <h3>${item.name}</h3>
              <p class="muted">${style.name} · ${item.audience}</p>
            </div>
          </div>
          <textarea id="videoOnlyPrompt" style="margin-top:12px">${style.name}短视频，开头展示整体穿搭，中段展示面料、工艺和适用场景，最后展示同系列搭配与上新节奏。</textarea>
          <div class="action-row" style="margin-top:12px">
            <button class="primary-btn" type="button" data-action="generate-video">生成视频</button>
            <button class="ghost-btn" type="button" data-action="export-video">导出演示视频</button>
          </div>
        </div>
        <div class="panel">
          <div class="panel-head">
            <div>
              <h2>分镜预览</h2>
              <p>演示数据用于客户讲解，真实项目接入视频模型后生成素材。</p>
            </div>
          </div>
          ${videoFrames()}
        </div>
      </div>
    `;
  },
  custom() {
    return `
      <div class="grid three">
        ${["WEB端商详", "APP端商详", "短视频商品内容"].map((name, index) => `
          <div class="panel">
            <div class="panel-head">
              <div>
                <h2>${name}</h2>
                <p>选择款式、风格和目标人群后生成，可继续进入人工微调。</p>
              </div>
            </div>
            <select>
              ${styleItems.map((item) => `<option>${item.name}</option>`).join("")}
            </select>
            <textarea style="margin-top:10px" placeholder="输入定制要求">突出穿着场景、细节卖点和目标人群。</textarea>
            <button class="primary-btn" style="margin-top:10px" type="button" data-action="${index === 2 ? "generate-video" : "generate-custom"}">生成内容</button>
          </div>
        `).join("")}
      </div>
    `;
  },
  billing() {
    return `
      <div class="grid two">
        <div class="panel">
          <div class="panel-head">
            <div>
              <h2>订阅与积分</h2>
              <p>基础版查看预测，高级版生成商详套图，旗舰版生成短视频和 AI 定制。</p>
            </div>
            <span class="status strong">当前 ${formatNumber(state.points)} 积分</span>
          </div>
          <div class="grid three">
            ${[
              ["基础版", "预测款式与维度说明", 0],
              ["高级版", "商详套图与APP图", 500],
              ["旗舰版", "短视频与AI定制", 1200],
            ].map(([name, desc, bonus]) => `
              <div class="metric-card">
                <span>${name}</span>
                <strong>${bonus ? `+${bonus}` : "已开通"}</strong>
                <p class="muted">${desc}</p>
              </div>
            `).join("")}
          </div>
          <div class="action-row" style="margin-top:14px">
            <button class="primary-btn" type="button" data-action="recharge" data-points="1000">充值 1000 积分</button>
            <button class="soft-btn" type="button" data-action="recharge" data-points="3000">充值 3000 积分</button>
            <button class="ghost-btn" type="button" data-action="recharge" data-points="10000">充值 10000 积分</button>
          </div>
        </div>
        <div class="panel">
          <div class="panel-head">
            <div>
              <h2>使用记录</h2>
              <p>展示演示环境下的积分扣减与充值。</p>
            </div>
          </div>
          <div class="timeline">
            ${state.usageRecords.map((record) => `
              <div class="list-row">
                <div>
                  <h3>${record.type}</h3>
                  <p class="muted">${record.item} · ${record.time}</p>
                </div>
                <span class="status ${record.cost < 0 ? "strong" : "observe"}">${record.cost < 0 ? "+" : "-"}${Math.abs(record.cost)} 积分</span>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `;
  },
};

function generatedOutputs() {
  const style = currentVisualStyle();
  return `
    <div class="panel" style="margin-top:14px">
      <div class="panel-head">
        <div>
          <h2>生成结果预览</h2>
          <p>商详套图、视频分镜均支持导出，导出按钮会触发演示反馈。</p>
        </div>
        <div class="action-row">
          <button class="ghost-btn" type="button" data-action="export-all-images">导出全部图片</button>
          <button class="soft-btn" type="button" data-action="export-video">导出视频分镜</button>
        </div>
      </div>
      <div class="output-grid">
        ${Array.from({ length: state.imageCount }).map((_, index) => `
          <div class="output-card">
            ${styleThumb(style)}
            <p>商详图 ${index + 1} · ${style.name}</p>
            <button class="ghost-btn" type="button" data-action="export-image">导出</button>
          </div>
        `).join("")}
      </div>
      <div style="margin-top:14px">${videoFrames()}</div>
    </div>
  `;
}

function videoFrames() {
  const style = currentVisualStyle();
  const labels = ["开场穿搭", "面料细节", "场景动作", "系列收口"];
  return `
    <div class="video-strip">
      ${labels.map((label, index) => `
        <div class="frame-card">
          ${styleThumb(style)}
          <div>
            <b>${label}</b>
            <span>00:0${index * 3}-00:0${index * 3 + 3}</span>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

const adminPages = {
  overview() {
    return `
      <div class="grid four">
        ${[
          ["入驻商家", "7,000+", "织里档口与电商商家池"],
          ["今日导入任务", "18", "平台数据与素材样本"],
          ["待处理工单", "12", "商详套图、短视频与复核"],
          ["模型任务", "4", "预测、风格学习、回看"],
        ].map(([label, value, desc]) => `
          <div class="metric-card">
            <span>${label}</span>
            <strong>${value}</strong>
            <p class="muted">${desc}</p>
          </div>
        `).join("")}
      </div>
      <div class="grid two" style="margin-top:14px">
        <div class="panel">
          <div class="panel-head"><div><h2>业务闭环</h2><p>后台导入数据，模型生成结论，供应商端完成内容生产与积分扣减。</p></div></div>
          <div class="pipeline">
            ${["数据导入", "清洗校验", "预测与风格学习", "用户生成", "反馈回流"].map((step, index) => `
              <div class="pipeline-step"><b>${index + 1}. ${step}</b><span>演示链路已接入本地测试数据。</span></div>
            `).join("")}
          </div>
        </div>
        <div class="panel">
          <div class="panel-head"><div><h2>待办提醒</h2><p>点击按钮可模拟处理状态。</p></div></div>
          ${["常熟服装类目配置待确认", "高转化商详图片样本待复核", "织里童装预测版本待发布"].map((item) => `
            <div class="list-row"><div><h3>${item}</h3><p class="muted">负责人：运营组</p></div><button class="soft-btn" type="button" data-action="admin-done">处理</button></div>
          `).join("")}
        </div>
      </div>
    `;
  },
  merchants() {
    return adminTablePage("商家列表", ["商家", "产业带", "套餐", "积分余额", "状态", "操作"], [
      ["织里星禾童装", "湖州织里", "高级版", "12,860", "活跃"],
      ["常熟轻简女装", "常熟服装", "旗舰版", "8,240", "试用"],
      ["常熟长青服饰", "常熟服装", "高级版", "5,600", "待续费"],
    ]);
  },
  onboarding() {
    return adminTablePage("入驻审核", ["商家", "产业带", "类目", "申请时间", "审核状态", "操作"], [
      ["织里贝壳童装", "湖州织里", "童装", "今天 09:30", "待审核"],
      ["常熟雅集男装", "常熟服装", "男装", "昨天 15:21", "资料补充"],
      ["常熟安然妈妈装", "常熟服装", "老年装", "昨天 10:08", "待审核"],
    ], "approve-onboarding");
  },
  orders() {
    return adminTablePage("订阅订单", ["订单", "商家", "套餐", "金额", "到期时间", "状态"], [
      ["SO-202605-018", "织里星禾童装", "高级版", "¥12,800", "2027-05-24", "已支付"],
      ["SO-202605-019", "常熟轻简女装", "旗舰版", "¥28,800", "2027-05-24", "待开票"],
      ["SO-202605-020", "常熟长青服饰", "高级版", "¥12,800", "2026-06-12", "续费提醒"],
    ]);
  },
  tokens() {
    return `
      <div class="grid two">
        <div class="panel">
          <div class="panel-head"><div><h2>积分规则</h2><p>按 token 成本折算积分价格，前台生成前展示预计消耗。</p></div></div>
          <div class="cost-line"><span>商详图片</span><strong>${POINT_RULE.image} 积分/张</strong></div>
          <div class="cost-line"><span>短视频</span><strong>${POINT_RULE.video} 积分/段</strong></div>
          <div class="cost-line"><span>失败返还</span><strong>自动返还</strong></div>
          <div class="action-row" style="margin-top:14px">
            <button class="primary-btn" type="button" data-action="admin-done">保存规则</button>
            <button class="ghost-btn" type="button" data-action="admin-done">导出流水</button>
          </div>
        </div>
        <div class="panel">
          <div class="panel-head"><div><h2>积分流水</h2><p>内部可查看完整扣减和充值记录。</p></div></div>
          <div class="table-wrap">
            <table><thead><tr><th>商家</th><th>行为</th><th>积分</th><th>时间</th></tr></thead>
              <tbody>
                <tr><td>织里星禾童装</td><td>生成商详套图</td><td>-12</td><td>今天 10:24</td></tr>
                <tr><td>常熟轻简女装</td><td>充值</td><td>+3000</td><td>今天 09:45</td></tr>
                <tr><td>织里星禾童装</td><td>生成短视频</td><td>-20</td><td>昨天 16:42</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  },
  funnel() {
    return `
      <div class="panel">
        <div class="panel-head"><div><h2>转化漏斗</h2><p>用于销售和客户成功跟进，不影响供应商端展示。</p></div></div>
        <div class="bars">
          ${[
            ["线索", 100, "7,000"],
            ["试用", 62, "4,340"],
            ["活跃", 38, "2,660"],
            ["付费", 16, "1,120"],
            ["续费", 10, "700"],
          ].map(([label, width, value]) => `
            <div class="bar-line"><span>${label}</span><div class="bar-track"><span style="--w:${width}%"></span></div><strong>${value}</strong></div>
          `).join("")}
        </div>
      </div>
    `;
  },
  tickets() {
    return `
      <div class="grid two">
        <div class="panel">
          <div class="panel-head"><div><h2>内容工单</h2><p>处理生成失败、人工复核和客户微调请求。</p></div><span class="status observe">${state.ticketStatus}</span></div>
          <div class="selected-source">
            ${thumb(currentStyle(), "mini-thumb")}
            <div><h3>${currentStyle().name}</h3><p class="muted">商详套图微调 · ${currentVisualStyle().name}</p></div>
          </div>
          <div class="action-row" style="margin-top:14px">
            <button class="primary-btn" type="button" data-action="ticket-next">流转下一步</button>
            <button class="ghost-btn" type="button" data-action="admin-done">下载附件</button>
          </div>
        </div>
        <div class="panel">
          <div class="panel-head"><div><h2>工单记录</h2><p>演示状态可切换。</p></div></div>
          ${["待复核", "已修改", "已交付"].map((status) => `
            <div class="list-row"><div><h3>${status}</h3><p class="muted">商详套图/短视频生成工单</p></div><span class="status ${status === state.ticketStatus ? "strong" : "caution"}">${status}</span></div>
          `).join("")}
        </div>
      </div>
    `;
  },
  model() {
    return `
      <div class="panel">
        <div class="panel-head">
          <div>
            <h2>款式预测与风格学习监控</h2>
            <p>后台内部查看完整链路：数据进入、特征加工、预测版本、提示词版本、反馈回流。</p>
          </div>
          <span class="status strong">${state.modelVersion}</span>
        </div>
        <div class="pipeline">
          ${["高转化素材池", "风格标签抽取", "提示词模板库", "预测版本回看", "生成效果反馈"].map((step) => `
            <div class="pipeline-step"><b>${step}</b><span>由导入样本和用户反馈持续更新。</span></div>
          `).join("")}
        </div>
      </div>
      <div class="grid three" style="margin-top:14px">
        ${visualStyles.map((style) => `
          <div class="panel">
            <div class="style-preview" style="--c1:${style.c1};--c2:${style.c2}"></div>
            <h2>${style.name}</h2>
            <p class="muted">${style.audience} · ${style.scene}</p>
            <div class="action-row" style="margin-top:12px">
              <button class="soft-btn" type="button" data-action="train-style">学习新样本</button>
              <button class="ghost-btn" type="button" data-action="sync-prompt">更新提示词</button>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  },
  import() {
    const importIndustry = currentImportIndustry();
    const importCategories = availableCategories(state.importIndustry);
    return `
      <div class="panel">
        <div class="panel-head">
          <div>
            <h2>数据导入中心</h2>
            <p>平台销售、商详图片、短视频样本和产业带配置均从后台进入系统。</p>
          </div>
          <button class="ghost-btn" type="button" data-action="download-template">下载标准模板</button>
        </div>
        <div class="import-grid">
          ${importSources.map((item) => `
            <article class="import-card ${state.importSource === item.id ? "active" : ""}" data-action="set-import-source" data-id="${item.id}">
              <h3>${item.name}</h3>
              <p class="muted">${item.desc}</p>
            </article>
          `).join("")}
        </div>
      </div>

      <div class="grid two" style="margin-top:14px">
        <div class="panel">
          <div class="panel-head"><div><h2>上传与校验</h2><p>支持 .xlsx / .csv / 图片压缩包 / 视频样本包的演示导入。</p></div></div>
          <div class="import-form">
            <label><span class="small-note">产业带</span><select id="adminIndustry">${industries.map((item) => `<option value="${item.id}" ${state.importIndustry === item.id ? "selected" : ""}>${item.name}</option>`).join("")}</select></label>
            <label><span class="small-note">类目</span><select id="adminCategory">${importCategories.map((item) => `<option value="${item.id}" ${state.importCategory === item.id ? "selected" : ""}>${item.name}</option>`).join("")}</select></label>
            <label><span class="small-note">平台</span><select id="adminPlatform">${["淘宝", "天猫", "京东", "拼多多", "抖店", "SHEIN", "TEMU", "TikTok"].map((item) => `<option ${state.importPlatform === item ? "selected" : ""}>${item}</option>`).join("")}</select></label>
            <button class="primary-btn" type="button" data-action="validate-import">上传并校验</button>
          </div>
          <div class="mapping-grid" style="margin-top:14px">
            ${["商品ID", "商品标题", "类目", "图片URL", "销售日期", "销售额", "库存", "导入批次"].map((field) => `
              <div class="mapping-item"><b>${field}</b><span class="muted">已映射到标准字段</span></div>
            `).join("")}
          </div>
          <div class="grid four" style="margin-top:14px">
            ${[
              ["总行数", state.importValidated ? "28,651" : "--"],
              ["有效行", state.importValidated ? "27,940" : "--"],
              ["异常行", state.importValidated ? "621" : "--"],
              ["重复行", state.importValidated ? "90" : "--"],
            ].map(([label, value]) => `<div class="metric-card"><span>${label}</span><strong>${value}</strong></div>`).join("")}
          </div>
          <div class="action-row" style="margin-top:14px">
            <button class="primary-btn" type="button" data-action="commit-import">确认入库</button>
            <button class="ghost-btn" type="button" data-action="download-error-report">下载错误报告</button>
          </div>
        </div>

        <div class="panel">
          <div class="panel-head"><div><h2>导入记录</h2><p>${importIndustry.name} · ${state.importPlatform}</p></div><span class="status ${state.importCommitted ? "strong" : "observe"}">${state.importCommitted ? "已入库" : "待确认"}</span></div>
          <div class="table-wrap">
            <table>
              <thead><tr><th>批次</th><th>类型</th><th>产业带</th><th>类目</th><th>状态</th><th>操作</th></tr></thead>
              <tbody>
                ${Array.from({ length: 5 }).map((_, index) => `
                  <tr>
                    <td>IMP-${String(state.importBatch - index).padStart(3, "0")}</td>
                    <td>${importSources.find((item) => item.id === state.importSource).name}</td>
                    <td>${index % 2 ? "常熟服装" : "湖州织里"}</td>
                    <td>${index % 2 ? "女装" : "童装"}</td>
                    <td><span class="status ${index === 1 ? "observe" : "strong"}">${index === 1 ? "部分异常" : "导入成功"}</span></td>
                    <td><button class="soft-btn" type="button" data-action="admin-done">详情</button></td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  },
};

function adminTablePage(title, headers, rows, action = "admin-done") {
  return `
    <div class="panel">
      <div class="panel-head"><div><h2>${title}</h2><p>演示用测试数据，可点击操作按钮查看交互反馈。</p></div></div>
      <div class="table-wrap">
        <table>
          <thead><tr>${headers.map((header) => `<th>${header}</th>`).join("")}</tr></thead>
          <tbody>
            ${rows.map((row) => `
              <tr>
                ${row.map((cell, index) => `<td>${index === row.length - 1 ? `<span class="status ${cell.includes("待") || cell.includes("提醒") ? "observe" : "strong"}">${cell}</span>` : cell}</td>`).join("")}
                ${row.length < headers.length ? `<td><button class="soft-btn" type="button" data-action="${action}">处理</button></td>` : ""}
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function ensureSelectedStyleInView() {
  const matches = styleItems.filter((item) => item.industry === state.industry && item.category === state.category);
  if (!matches.some((item) => item.id === state.selectedStyle)) {
    state.selectedStyle = matches[0]?.id || styleItems[0].id;
  }
}

function switchSystem(system) {
  state.system = system;
  state.section = system === "supplier" ? "home" : "overview";
  render();
}

function handleClick(event) {
  const target = event.target.closest("[data-system], [data-nav], [data-action]");
  if (!target) return;

  if (target.dataset.system) {
    switchSystem(target.dataset.system);
    return;
  }

  if (target.dataset.nav) {
    state.section = target.dataset.nav;
    render();
    return;
  }

  const action = target.dataset.action;
  const id = target.dataset.id;

  if (action === "set-industry") {
    state.industry = id;
    state.category = availableCategories(id)[0].id;
    ensureSelectedStyleInView();
    render();
  }

  if (action === "set-category") {
    state.category = id;
    ensureSelectedStyleInView();
    render();
  }

  if (action === "set-period") {
    state.period = Number(id);
    render();
  }

  if (action === "select-style") {
    state.selectedStyle = id;
    render();
  }

  if (action === "go-detail") {
    state.section = "detail";
    render();
  }

  if (action === "go-video") {
    state.section = "video";
    render();
  }

  if (action === "go-home") {
    state.section = "home";
    render();
  }

  if (action === "go-billing") {
    if (state.system === "supplier") {
      state.section = "billing";
    } else {
      state.section = "overview";
    }
    render();
  }

  if (action === "set-visual") {
    state.selectedVisual = id;
    render();
  }

  if (action === "upload-photo") {
    state.uploadedPhotos = Math.min(6, state.uploadedPhotos + 1);
    toast("已模拟上传一张图片");
    render();
  }

  if (action === "clear-upload") {
    state.uploadedPhotos = 0;
    toast("已清空上传图片");
    render();
  }

  if (action === "image-minus" || action === "image-plus") {
    state.imageCount = action === "image-plus" ? Math.min(12, state.imageCount + 1) : Math.max(1, state.imageCount - 1);
    render();
  }

  if (action === "video-minus" || action === "video-plus") {
    state.videoCount = action === "video-plus" ? Math.min(3, state.videoCount + 1) : Math.max(0, state.videoCount - 1);
    render();
  }

  if (action === "add-finetune") {
    const input = $("#fineTuneInput");
    const text = input?.value.trim();
    if (!text) {
      toast("请输入调整要求");
      return;
    }
    state.fineTuneNotes.push(text);
    state.fineTuneNotes.push("已把调整要求合并到当前提示词，并保持所选流行风格。");
    render();
  }

  if (action === "generate-detail") {
    const cost = generationCost();
    if (state.points < cost) {
      toast("积分不足，请先充值");
      return;
    }
    state.points -= cost;
    state.generationBatch += 1;
    state.usageRecords.unshift({ type: "商详套图/短视频", item: currentStyle().name, cost, time: "刚刚" });
    toast(`生成成功，已消耗 ${cost} 积分`);
    render();
  }

  if (action === "generate-video") {
    if (state.points < POINT_RULE.video) {
      toast("积分不足，请先充值");
      return;
    }
    state.points -= POINT_RULE.video;
    state.usageRecords.unshift({ type: "短视频", item: currentStyle().name, cost: POINT_RULE.video, time: "刚刚" });
    toast(`视频生成成功，已消耗 ${POINT_RULE.video} 积分`);
    render();
  }

  if (action === "generate-custom") {
    const cost = state.imageCount * POINT_RULE.image;
    state.points -= cost;
    state.usageRecords.unshift({ type: "AI定制", item: currentStyle().name, cost, time: "刚刚" });
    toast(`定制内容已生成，已消耗 ${cost} 积分`);
    render();
  }

  if (action === "export-image" || action === "export-all-images") {
    toast(action === "export-image" ? "已导出当前图片" : "已导出全部商详图片");
  }

  if (action === "export-video") {
    toast("已导出演示视频/分镜文件");
  }

  if (action === "export-prediction") {
    toast("已导出推荐结果");
  }

  if (action === "recharge") {
    const points = Number(target.dataset.points || 0);
    state.points += points;
    state.usageRecords.unshift({ type: "积分充值", item: "演示充值", cost: -points, time: "刚刚" });
    toast(`充值成功，增加 ${points} 积分`);
    render();
  }

  if (action === "set-import-source") {
    state.importSource = id;
    state.importValidated = false;
    state.importCommitted = false;
    render();
  }

  if (action === "download-template") {
    toast("已模拟下载标准模板");
  }

  if (action === "validate-import") {
    const industry = $("#adminIndustry")?.value;
    const category = $("#adminCategory")?.value;
    const platform = $("#adminPlatform")?.value;
    if (industry) state.importIndustry = industry;
    if (category) state.importCategory = category;
    if (platform) state.importPlatform = platform;
    state.importValidated = true;
    state.importCommitted = false;
    toast("字段校验完成，发现部分异常行");
    render();
  }

  if (action === "commit-import") {
    if (!state.importValidated) {
      toast("请先上传并校验");
      return;
    }
    state.importCommitted = true;
    state.importBatch += 1;
    toast("有效数据已进入内部预测数据池");
    render();
  }

  if (action === "download-error-report") {
    toast("已模拟下载错误报告");
  }

  if (action === "ticket-next") {
    const stages = ["待复核", "已修改", "已交付"];
    const next = (stages.indexOf(state.ticketStatus) + 1) % stages.length;
    state.ticketStatus = stages[next];
    toast(`工单已流转为：${state.ticketStatus}`);
    render();
  }

  if (action === "train-style") {
    toast("已加入新样本学习队列");
  }

  if (action === "sync-prompt") {
    state.modelVersion = state.modelVersion === "V2.4" ? "V2.5" : "V2.4";
    toast("提示词版本已更新");
    render();
  }

  if (action === "admin-done" || action === "approve-onboarding") {
    toast("操作已完成");
  }
}

function handleChange(event) {
  if (event.target.id === "adminIndustry") {
    state.importIndustry = event.target.value;
    state.importCategory = availableCategories(state.importIndustry)[0].id;
    render();
  }
  if (event.target.id === "adminCategory") {
    state.importCategory = event.target.value;
    render();
  }
  if (event.target.id === "adminPlatform") {
    state.importPlatform = event.target.value;
    render();
  }
}

function resetDemo() {
  Object.assign(state, {
    ...initialState,
    usageRecords: [...initialState.usageRecords],
    fineTuneNotes: [...initialState.fineTuneNotes],
  });
  toast("演示数据已重置");
  render();
}

function primaryAction() {
  if (state.system === "supplier") {
    state.section = "detail";
  } else {
    state.section = "import";
  }
  render();
}

document.addEventListener("click", handleClick);
document.addEventListener("change", handleChange);
$("#demoReset").addEventListener("click", resetDemo);
$("#primaryAction").addEventListener("click", primaryAction);

render();
