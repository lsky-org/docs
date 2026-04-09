# AI 功能 {#ai}

兰空图床集成了 AI 能力，支持对图片进行智能润色、自动打标签、自动生成描述。系统支持多个 AI 供应商，管理员可以在后台创建和管理 AI 驱动，并通过角色组控制用户的 AI 使用权限和配额。

## 支持的供应商 {#supported-providers}

| 供应商 | 图片润色 | 打标签 | 生成描述 |
|-------|:------:|:-----:|:------:|
| OpenAI | ✅ | ✅ | ✅ |
| Google Gemini | ✅ | ✅ | ✅ |
| 火山引擎（豆包） | ✅ | ✅ | ✅ |
| 智谱 AI（GLM） | ✅ | ✅ | ✅ |
| 阿里百炼（通义千问） | ❌ | ✅ | ✅ |
| 月之暗面（Kimi） | ❌ | ✅ | ✅ |

::: tip 关于图片润色
图片润色需要供应商支持图片生成能力，阿里百炼和月之暗面目前仅支持文本能力，因此不支持图片润色功能。
:::

## AI 能力说明 {#capabilities}

### 图片润色 {#image-enhance}

通过自然语言描述，让 AI 对图片进行编辑和增强处理。例如：「将背景替换为蓝天白云」、「提高图片亮度和对比度」、「将图片转为水彩画风格」等。

用户提交润色任务时可以选择是否替换原图，如果不替换，系统会生成一张新图片。

### 自动打标签 {#tagging}

AI 会自动分析图片内容，生成准确的描述性标签。系统支持自动识别中英文，并根据图片内容返回合适语言的标签。

### 自动生成描述 {#description}

AI 会自动分析图片内容，为图片生成一段简洁的描述文字，该描述会保存在图片的简介字段中。

## 配置供应商 API {#configure-provider-api}

AI 功能依赖于第三方供应商的 API 服务。你需要编辑项目根目录下的 `config/ai.php` 配置文件来设置供应商的 API 地址和密钥。

::: warning 注意
`config/ai.php` 中的配置仅用于定义供应商的 API 连接参数。实际的 AI 驱动创建和管理需要在管理后台中完成。
:::

### 配置结构 {#config-structure}

配置文件的 `providers` 数组中包含了所有可用的供应商配置，每个供应商都可以通过环境变量来设置 API 密钥和 URL：

```php
'providers' => [
    'openai' => [
        'driver' => 'openai',
        'key' => env('OPENAI_API_KEY'),
        'url' => env('OPENAI_URL', 'https://api.openai.com/v1'),
    ],
    // ...
],
```

### 环境变量 {#environment-variables}

推荐通过 `.env` 文件来配置 API 密钥和自定义 API 地址，以下是各供应商对应的环境变量：

| 供应商 | API Key 变量 | API URL 变量 | 默认 URL |
|-------|-------------|-------------|---------|
| OpenAI | `OPENAI_API_KEY` | `OPENAI_URL` | `https://api.openai.com/v1` |
| Google Gemini | `GEMINI_API_KEY` | — | — |
| 火山引擎 | `VOLCENGINE_API_KEY` | `VOLCENGINE_URL` | `https://ark.cn-beijing.volces.com/api/v3` |
| 智谱 AI | `ZHIPU_API_KEY` | `ZHIPU_URL` | `https://open.bigmodel.cn/api/paas/v4` |
| 阿里百炼 | `DASHSCOPE_API_KEY` | `DASHSCOPE_URL` | `https://dashscope.aliyuncs.com/compatible-mode/v1` |
| 月之暗面 | `MOONSHOT_API_KEY` | `MOONSHOT_URL` | `https://api.moonshot.cn/v1` |

::: tip 使用第三方代理
如果你的服务器无法直接访问某些供应商的 API（如 OpenAI），可以通过修改对应的 URL 环境变量来指向代理地址。例如：

```env
OPENAI_URL=https://your-proxy.example.com/v1
```

火山引擎、智谱 AI、阿里百炼、月之暗面均使用 OpenAI 兼容协议，因此也支持自定义 API 地址。
:::

### 配置示例 {#config-example}

在 `.env` 文件中添加所需供应商的配置：

```env
# OpenAI
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxx
OPENAI_URL=https://api.openai.com/v1

# Google Gemini
GEMINI_API_KEY=AIzaxxxxxxxxxxxxxxxxx

# 火山引擎（豆包）
VOLCENGINE_API_KEY=xxxxxxxxxxxxxxxx

# 智谱 AI（GLM）
ZHIPU_API_KEY=xxxxxxxxxxxxxxxx

# 阿里百炼（通义千问）
DASHSCOPE_API_KEY=sk-xxxxxxxxxxxxxxxx

# 月之暗面（Kimi）
MOONSHOT_API_KEY=sk-xxxxxxxxxxxxxxxx
```

## 创建 AI 驱动 {#create-ai-driver}

配置好供应商的 API 后，需要在管理后台创建 AI 驱动才能使用 AI 功能。

进入管理后台，在左侧菜单找到「驱动」分组下的「AI 驱动」，点击「新建」来创建一个 AI 驱动。

创建驱动时需要填写以下信息：

- **名称**：驱动名称，用于在前台展示给用户。
- **供应商**：选择一个 AI 供应商，不同供应商支持的能力不同。
- **简介**：可选，驱动的简要说明。
- **API Key**：供应商的 API 密钥。
- **能力**：勾选该驱动需要开启的能力（图片润色、打标签、生成描述），不支持的能力将被禁止选择。

根据所选的供应商和能力，还需要配置对应的模型：

- **图片润色**：需要选择图片模型和生成质量。
- **打标签 / 生成描述**：需要选择文本模型。

::: tip
同一个供应商可以创建多个驱动，使用不同的 API Key 或不同的模型配置，以满足不同场景的需求。
:::

## 角色组配置 {#group-settings}

AI 功能通过角色组进行权限控制，管理员可以在编辑角色组时配置以下选项：

### 启用 AI {#enable-ai}

在角色组设置中开启「AI」开关后，该角色组下的所有用户即可使用 AI 功能。

### 关联 AI 驱动 {#associate-drivers}

与储存类似，每个角色组可以关联多个 AI 驱动。只有关联了 AI 驱动的角色组，其用户才能使用对应的 AI 能力。

### 使用频率限制 {#rate-limits}

为了控制 AI 资源消耗，可以为角色组设置多个维度的使用频率限制：

| 限制维度 | 说明 |
|---------|------|
| 每分钟限制 | 每分钟内允许使用的次数 |
| 每小时限制 | 每小时内允许使用的次数 |
| 每天限制 | 每天允许使用的次数 |
| 每周限制 | 每周允许使用的次数 |
| 每月限制 | 每月允许使用的次数 |

将任意限制值设为 `0` 表示该维度不限制。所有限制维度同时生效，任意一个维度达到上限即无法继续使用。

::: warning 注意
AI 功能按次计费，每处理一张图片计为一次使用。批量提交时（如同时选择 10 张图片打标签），会一次性消耗对应的次数。
:::

## 任务处理机制 {#task-processing}

AI 任务通过[消息队列](./install#第四步-配置消息队列)异步处理，提交任务后系统会立即返回任务状态，前端会自动轮询获取任务进度。

任务状态包括：

| 状态 | 说明 |
|-----|------|
| 等待中 | 任务已提交，等待队列处理 |
| 处理中 | 任务正在被 AI 处理 |
| 已完成 | 任务处理成功 |
| 失败 | 任务处理失败，可查看错误信息 |

::: tip 确保消息队列正常运行
AI 功能依赖消息队列来异步处理任务。如果发现任务一直处于「等待中」状态，请检查消息队列是否已正确配置并正常运行。详见 [安装 - 配置消息队列](./install#第四步-配置消息队列) 章节。
:::
