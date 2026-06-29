# 3 个月 Agent 应用工程师转型路线

适用对象：

- 8 年前端开发经验，主技术栈为 Vue。
- 已经学习过 `hello-agents` 前 1-6 章，但还没有真实上手开发。
- 目标是在 3 个月内转向 Agent / LLM 应用开发方向，争取具备 25k offer 的竞争力。
- 每天可投入约 1.5 小时，3 个月总投入约 130-140 小时。

核心结论：

```text
你的目标不是成为大模型算法工程师，而是成为能把 Agent 落地到业务系统里的 AI 应用工程师。
```

最适合你的岗位方向：

- AI 应用开发工程师
- LLM 应用工程师
- Agent 应用开发工程师
- 前端 AI 产品工程师
- AI Copilot / 智能助手方向前端全栈工程师

不建议 3 个月内主攻的方向：

- 大模型训练
- 推理引擎优化
- Agentic RL
- 多智能体研究
- 论文复现型岗位
- 纯算法岗

你的核心卖点应该是：

```text
我有多年 Vue 和业务系统经验，能独立完成一个 Agent 产品从前端交互、后端 API、RAG、工具调用、评估、日志、部署到面试表达的完整闭环。
```

## 参考资料定位

本路线结合两个资料源，但不会照搬它们的完整顺序。

### hello-agents

定位：系统教程，适合补 Agent 基础概念、框架、记忆、检索、上下文工程、协议、评估和综合案例。

推荐使用方式：

- 用它补知识盲区。
- 用它理解 Agent 基本结构。
- 用它对照自己的项目实现。

不推荐使用方式：

- 从头到尾只看不写。
- 学完所有章节后才开始做项目。
- 把教程 demo 当成最终作品。

重点关注：

- Agent 基础概念
- Agent loop
- tool calling
- memory
- RAG
- context engineering
- MCP
- evaluation
- 综合项目设计

### Agent-Learning-Hub

定位：Agent 学习地图和资源索引，适合校准方向，了解真实 Agent 工程要素。

推荐吸收：

- chatbot、workflow、agent、multi-agent 的边界
- 最小 agent loop
- tool use
- RAG / memory
- agent harness
- evaluation
- safety
- project ladder

暂时跳过：

- 重度 multi-agent
- browser agent
- Claude Code 级复杂系统复刻
- OpenClaw / Hermes 深入源码
- A2A / ACP 深入
- 大量论文泛读

## 总体学习原则

### 原则 1：项目驱动

每天至少一半时间写代码。只看文档不算有效学习。

推荐比例：

```text
20 分钟：学习一个明确知识点
55 分钟：写项目代码
15 分钟：调试、测试、补文档
10 分钟：记录 bad case 和复盘
```

### 原则 2：只做一个主项目

三个月不要做 10 个 demo。主项目建议固定为：

```text
Frontend Repo Agent
```

中文名：

```text
前端代码库智能维护 Agent
```

它最适合你的原因：

- 和 Vue / 前端经验强相关。
- 面试时容易讲业务价值。
- 能覆盖 RAG、tool calling、streaming、structured output、evaluation。
- 能证明你不是只会调 API，而是能把 AI 接进真实工程工作流。

### 原则 3：先 workflow，再 agent

企业里大量成功落地不是完全自主 Agent，而是：

```text
可控 workflow + 局部 agent 决策 + 工具调用 + 人工确认 + 日志追踪
```

不要一上来做复杂多智能体。先把单 Agent 做稳定。

### 原则 4：prompt 当代码管理

prompt 不是随手写的文案，而是会影响系统行为的代码。

要求：

- prompt builder 放在靠近业务功能的小模块中。
- 动态参数必须有类型。
- 生产 prompt 修改必须有测试样本。
- prompt 变更走部署流程。
- 重要 prompt 支持版本和回滚。

### 原则 5：每个功能都要能验收

进入下一阶段的标准不是“看完了”，而是：

```text
能运行
能演示
能讲清楚
能定位问题
能写进简历
```

## 最终主项目

项目名称：

```text
Frontend Repo Agent
```

项目定位：

```text
面向前端团队的代码库智能维护助手，帮助开发者理解老项目、定位代码、解释组件、辅助代码 Review，并给出可追踪的修改建议。
```

核心用户：

- 接手老 Vue 项目的前端开发
- 需要快速理解业务模块的新成员
- 做代码 Review 的组长
- 需要改造历史代码的维护者

核心场景：

- 这个组件做什么？
- 某个接口在哪里被调用？
- 某个状态字段从哪里来？
- 这个页面有哪些潜在 bug？
- 这段代码有没有性能问题？
- 如果要重构，应该先改哪里？
- 这个需求会影响哪些文件？

最终功能清单：

- Vue 前端聊天界面
- 后端 Agent API
- OpenAI Responses API 调用
- streaming 流式输出
- previous_response_id 多轮续接
- instructions 每轮注入
- tool calling
- 代码文件读取工具
- 代码搜索工具
- 项目结构分析工具
- RAG 代码库检索
- 引用来源展示
- structured output 输出 review issue
- 人工确认高风险工具调用
- 工具调用日志
- bad case 记录
- 评估集
- 成本统计
- Docker 部署
- README 和架构图

技术栈建议：

```text
Frontend:
- Vue 3
- TypeScript
- Vite
- Pinia
- Element Plus / Naive UI

Backend:
- Node.js + Express / Fastify
- 或 Python + FastAPI

AI:
- OpenAI Responses API
- streaming
- function calling
- structured outputs
- embeddings

Storage:
- SQLite 起步
- 后续可换 PostgreSQL
- 向量库可先用本地方案，再换 Qdrant / pgvector

DevOps:
- Docker
- .env
- 基础日志
```

后端选择建议：

```text
如果你想最快做出作品：先用 Node.js。
如果你想贴近大多数 Agent 生态：补 FastAPI。
```

本路线建议：

```text
第一版用 Node.js 快速完成闭环。
第二版补一个 FastAPI 分支或服务，用于证明你能适应 Python Agent 生态。
```

## 三个月阶段总览

```text
第 1-2 周：OpenAI API 和 streaming 基础，做出可聊天 MVP
第 3-4 周：tool calling 和最小 agent loop，能调用代码工具
第 5-6 周：RAG 和代码库索引，能基于项目内容问答
第 7-8 周：结构化输出、工作流编排、人工确认，形成可控 Agent
第 9-10 周：评估、日志、成本、安全，接近生产级
第 11-12 周：部署、作品集、简历、面试表达
```

阶段目标：

```text
第 1 个月：能跑
第 2 个月：能用
第 3 个月：能讲、能演示、能面试
```

## 第 0 周：准备与目标冻结

周期：2-3 天

目标：

- 固定主项目。
- 建好仓库。
- 明确学习节奏。
- 准备一个用于测试的 Vue 项目。

任务：

- 创建 GitHub 仓库：`frontend-repo-agent`
- 初始化前端：Vue 3 + TypeScript + Vite
- 初始化后端：Node.js + TypeScript
- 准备 `.env.example`
- 准备一个样例 Vue 项目作为被分析对象
- 写第一版 README

目录建议：

```text
frontend-repo-agent/
  apps/
    web/
    server/
  packages/
    shared/
  fixtures/
    vue-project-sample/
  docs/
    architecture.md
    eval-report.md
    bad-cases.md
```

验收标准：

- 项目能启动。
- 前端页面能访问。
- 后端 health check 能访问。
- README 写清楚项目目标。

## 第 1 周：Responses API 基础

目标：

- 掌握文本生成请求的基本结构。
- 理解 `instructions`、`input`、`model`、`output_text`。
- 做出非流式聊天接口。

学习重点：

- Responses API
- input 组织方式
- instructions 和 user input 的职责
- 模型选择策略
- output_text 获取方式

必须理解：

```text
instructions:
控制模型角色、规则、输出边界。每次请求都要传。

input:
表达本次用户任务和动态数据。

model:
根据质量、成本、延迟选择。不要把模型名散落在业务代码里。

output_text:
最简单的文本结果读取方式，但生产里还要保存 response.id 和 usage。
```

编码任务：

- 后端实现 `/api/chat`。
- 前端实现基础聊天页面。
- 支持发送问题并展示完整回答。
- 服务端保存每次请求的 `response.id`。

验收标准：

- 能问：“请解释这个 Vue 组件的职责。”
- 后端返回模型文本。
- 日志里能看到 model、responseId、耗时。

复盘问题：

- 为什么 `instructions` 不应该拼在用户输入里？
- 为什么模型名要做配置？
- `output_text` 适合什么场景，不适合什么场景？

## 第 2 周：Streaming 流式输出

目标：

- 掌握 OpenAI streaming 的事件模型。
- 实现前后端流式转发。
- 支持停止生成。

学习重点：

- `stream: true`
- SSE
- `response.output_text.delta`
- `response.completed`
- `response.failed`
- AbortController

实战架构：

```text
OpenAI stream -> 后端转发 -> Vue fetch stream -> UI 逐步追加
```

编码任务：

- 后端实现 `/api/chat/stream`。
- 后端只转发自己定义的事件：`created`、`delta`、`done`、`error`。
- 前端使用 `fetch + ReadableStream` 读取流。
- UI 支持停止生成。
- 完成后保存 `responseId`。

验收标准：

- Network 面板能看到响应分块返回。
- UI 能逐字或分片显示。
- 点击停止后，前端和后端都停止。
- loading 状态不会卡死。

复盘问题：

- 为什么不建议浏览器直接请求 OpenAI？
- 为什么不应该把 OpenAI 原始事件全部透传给前端？
- Nginx 或代理层为什么可能破坏流式效果？

## 第 3 周：Conversation State 与多轮对话

目标：

- 掌握 `previous_response_id` 的使用边界。
- 实现多轮追问。
- 理解 instructions 不会自动继承。

学习重点：

- previous_response_id
- conversation state
- 上下文续接
- instructions 每轮注入
- 会话存储

必须理解：

```text
previous_response_id 会让当前请求接上之前 response 的上下文。
但之前请求里的 instructions 不会自动带到当前请求。
所以生产中每一轮都要重新注入核心 instructions。
```

编码任务：

- 前端维护当前会话的 `previousResponseId`。
- 后端每轮都传入相同的 base instructions。
- 支持用户追问：“继续检查性能问题。”
- 保存会话消息列表。

验收标准：

- 第一轮上传代码并提问。
- 第二轮不重复完整问题，也能基于上一轮继续回答。
- 第二轮仍然遵守输出规则。

复盘问题：

- previous_response_id 继承什么？
- previous_response_id 不继承什么？
- 为什么长期会话不能无限依赖完整历史？

## 第 4 周：Tool Calling 与最小 Agent Loop

目标：

- 掌握 function calling / tool calling。
- 做出最小 agent loop。
- 让模型能请求读取文件或搜索代码。

学习重点：

- tool schema
- tool arguments
- 参数校验
- 工具执行
- 工具结果回传模型
- agent loop

最小 agent loop：

```text
用户问题
-> 模型判断是否需要工具
-> 模型输出 tool call
-> 程序校验参数
-> 执行工具
-> 工具结果回传模型
-> 模型生成最终答案
```

第一批工具：

```text
read_file(path)
search_code(query)
list_project_tree(depth)
```

编码任务：

- 定义 3 个工具 schema。
- 后端实现工具执行器。
- 限制工具只能访问指定项目目录。
- 工具参数使用 Zod 校验。
- 前端展示工具调用过程。

验收标准：

- 用户问：“这个接口在哪里调用？”
- 模型能调用 `search_code`。
- 用户问：“解释 src/views/UserList.vue。”
- 模型能调用 `read_file`。
- 工具访问越权路径会失败。

复盘问题：

- 为什么模型不能直接执行工具？
- 为什么工具参数必须校验？
- 哪些工具需要人工确认？

## 第 5 周：RAG 基础与代码库索引

目标：

- 建立代码库检索能力。
- 实现基于代码内容的问答。
- 回答必须带引用来源。

学习重点：

- embedding
- chunk
- metadata
- vector search
- hybrid search
- retrieval context
- citation

代码 chunk 策略：

```text
普通文档：按段落切。
代码文件：按文件、组件、函数、导出符号优先切。
Vue SFC：至少区分 template、script、style。
```

metadata 建议：

```text
filePath
language
chunkType
symbolName
startLine
endLine
hash
updatedAt
```

编码任务：

- 扫描指定 Vue 项目。
- 解析文件并生成 chunk。
- 调 embedding API。
- 保存向量和 metadata。
- 实现 `/api/search`。
- Agent 回答时带引用来源。

验收标准：

- 问一个项目相关问题，回答能引用具体文件路径。
- 引用片段和回答内容相关。
- 文件改动后可以重新索引。

复盘问题：

- chunk 太大有什么问题？
- chunk 太小有什么问题？
- 为什么只做向量检索还不够？

## 第 6 周：RAG 优化与上下文工程

目标：

- 提升检索质量。
- 控制上下文长度。
- 减少幻觉。

学习重点：

- query rewrite
- rerank
- top-k
- context packing
- context compression
- answer grounding
- bad case analysis

编码任务：

- 加入关键词搜索，与向量检索合并。
- 对召回结果做简单 rerank。
- 限制上下文 token 预算。
- 如果检索结果不足，模型必须说明信息不足。
- 记录 bad case。

验收标准：

- 至少准备 20 个代码库问题。
- 统计引用命中率。
- 记录 5 个失败案例并分析原因。

复盘问题：

- RAG 的失败可能来自哪些环节？
- 为什么回答必须引用来源？
- 如何判断是检索错了，还是生成错了？

## 第 7 周：Structured Output 与代码 Review

目标：

- 让模型稳定输出结构化 review 结果。
- 把自然语言回答和系统消费结果分开。

学习重点：

- structured outputs
- JSON schema
- issue list
- severity
- confidence
- evidence

Review 输出结构建议：

```json
{
  "summary": "string",
  "issues": [
    {
      "title": "string",
      "severity": "critical | high | medium | low",
      "category": "bug | performance | maintainability | security | style",
      "filePath": "string",
      "lineStart": 1,
      "lineEnd": 10,
      "evidence": "string",
      "suggestion": "string",
      "confidence": 0.8
    }
  ]
}
```

编码任务：

- 实现 `review_file` workflow。
- 对单文件输出结构化 issue list。
- 前端用表格展示 issue。
- 支持点击 issue 跳转引用片段。
- 完成后再生成自然语言总结。

验收标准：

- 对一个有明显问题的 Vue 文件，能输出结构化问题列表。
- severity、category、filePath、line 范围基本合理。
- JSON 可以稳定解析。

复盘问题：

- streaming 和 structured output 如何配合？
- 哪些结果适合结构化？
- 为什么不能只依赖自然语言回答？

## 第 8 周：可控 Workflow 与人工确认

目标：

- 从“聊天机器人”升级到“可控 Agent 工作流”。
- 对高风险动作加入人工确认。

学习重点：

- workflow vs agent
- router
- planner-executor
- human-in-the-loop
- permission boundary
- retry
- timeout

推荐工作流：

```text
用户输入
-> intent router
-> 选择问答 / 搜索 / review / 影响分析
-> 如需工具，执行工具
-> 如需高风险动作，请求人工确认
-> 生成最终结果
-> 记录 trace
```

高风险动作：

```text
写文件
删除文件
执行 shell
调用外部系统
提交代码
创建工单
发送消息
```

编码任务：

- 实现 intent router。
- 实现 review workflow。
- 实现 impact analysis workflow。
- 增加人工确认 UI。
- 工具执行增加 timeout 和 retry。

验收标准：

- 普通读取类工具自动执行。
- 高风险工具必须用户确认。
- 用户拒绝后，Agent 能改为给出手动操作建议。

复盘问题：

- 什么时候该用 workflow，什么时候该用 agent？
- 为什么生产系统不能让模型自由执行所有动作？
- retry 应该放在哪一层？

## 第 9 周：日志、Trace 与可观测性

目标：

- 让每次 Agent 执行过程可追踪。
- 能定位为什么回答错。

学习重点：

- trace
- run
- step
- tool call log
- prompt version
- model version
- latency
- token usage
- cost tracking

每次请求建议记录：

```text
requestId
sessionId
userInput
promptVersion
model
retrievedChunks
toolCalls
finalAnswer
usage
latency
error
createdAt
```

编码任务：

- 实现 agent run 日志表。
- 实现 tool call 日志表。
- 前端展示一次执行的步骤。
- 记录 token usage 和耗时。
- 记录 prompt version。

验收标准：

- 任意一次回答都能查看完整执行链路。
- 能知道调用了哪些工具。
- 能知道用了哪些检索片段。
- 能知道失败发生在哪一步。

复盘问题：

- 如果用户说“回答错了”，你怎么定位？
- 为什么 prompt version 很重要？
- token usage 对产品有什么影响？

## 第 10 周：Evaluation 与安全边界

目标：

- 建立最小评估体系。
- 证明项目不是“看起来能用”，而是有数据衡量。

学习重点：

- eval dataset
- golden answer
- LLM-as-judge
- retrieval eval
- answer eval
- regression test
- safety guardrail

评估集建议：

```text
代码定位类：10 个
组件解释类：10 个
代码 review 类：10 个
影响分析类：10 个
异常/越权类：10 个
```

指标建议：

```text
answer_correctness
citation_hit_rate
tool_success_rate
json_parse_success_rate
hallucination_rate
avg_latency
avg_token_cost
```

编码任务：

- 建立 `evals/questions.jsonl`。
- 写一个 eval runner。
- 输出 `docs/eval-report.md`。
- 加入越权路径测试。
- 加入 prompt injection 测试样本。

验收标准：

- 至少 50 条评估样本。
- 每次改 prompt 后能跑 eval。
- 能输出评估报告。
- 能列出当前系统的 5 个已知限制。

复盘问题：

- 如何证明你的 Agent 比普通聊天框更可靠？
- 什么是 hallucination？
- prompt injection 在代码库问答里可能怎么发生？

## 第 11 周：部署、文档与演示

目标：

- 把项目做成别人能运行、能理解、能评价的作品。

学习重点：

- Docker
- env config
- README
- architecture diagram
- demo script
- release checklist

编码任务：

- 编写 Dockerfile。
- 编写 docker-compose。
- 补齐 `.env.example`。
- 写 `docs/architecture.md`。
- 写 `docs/eval-report.md`。
- 写 `docs/bad-cases.md`。
- 录制 3-5 分钟演示视频脚本。

README 必须包含：

```text
项目背景
核心功能
技术架构
本地启动
环境变量
工具调用设计
RAG 设计
评估结果
安全边界
已知问题
下一步计划
```

验收标准：

- 新机器按 README 能跑起来。
- 有清晰架构图。
- 有真实 eval 报告。
- 有 bad case 分析。

复盘问题：

- 面试官为什么要相信这是你做的？
- 这个项目和普通 ChatGPT 套壳有什么区别？
- 线上部署时最可能出什么问题？

## 第 12 周：简历、面试与查漏补缺

目标：

- 把项目转化成面试竞争力。
- 准备可讲、可问、可追问的项目表达。

简历项目描述模板：

```text
Frontend Repo Agent：面向前端团队的代码库智能维护助手

- 基于 Vue 3 + Node.js + OpenAI Responses API 构建代码库问答和 Review Agent，支持流式输出、多轮上下文续接和工具调用。
- 设计 read_file、search_code、list_project_tree 等受控工具，并通过参数校验、目录沙箱和人工确认机制限制高风险操作。
- 实现代码库 RAG 检索流程，包含代码 chunk、embedding、metadata、引用来源展示和 bad case 分析。
- 使用 structured outputs 生成结构化代码 Review issue，支持 severity、category、evidence、suggestion 等字段。
- 建立 50 条评估集，统计 citation_hit_rate、tool_success_rate、json_parse_success_rate、avg_latency 和 token cost。
```

必须能讲清楚的问题：

- 为什么选择做代码库 Agent？
- 系统整体架构是什么？
- streaming 怎么实现？
- previous_response_id 怎么用？
- instructions 为什么每次都传？
- tool calling 的完整链路是什么？
- 工具调用如何做权限控制？
- RAG 的 chunk 策略是什么？
- 检索结果不准怎么办？
- structured output 怎么保证可解析？
- 如何评估 Agent 是否可靠？
- 如何定位一次错误回答？
- 如何控制成本？
- 如何防 prompt injection？
- 为什么不直接用 LangChain / LangGraph？
- 什么时候该用 workflow，什么时候该用 agent？

最终验收标准：

- 项目能本地运行。
- 项目能完整演示 3 条主流程。
- README 完整。
- 架构图完整。
- eval 报告完整。
- bad case 文档完整。
- 简历项目描述可用。
- 能回答上面 80% 的问题。

## 每日学习模板

每天 1.5 小时建议这样安排：

```text
第 1 段，20 分钟：
阅读一个明确知识点，只看当前任务需要的内容。

第 2 段，55 分钟：
写代码，实现当天的小功能。

第 3 段，15 分钟：
调试、补错误处理、补类型。

第 4 段，10 分钟：
记录 bad case、问题、明天要做什么。
```

每天结束必须留下至少一个产出：

- 一次 commit
- 一个可运行功能
- 一个 bug 记录
- 一段 README
- 一个 eval case
- 一个面试问题答案

## 每周复盘模板

每周末写一次复盘：

```text
本周完成了什么？
哪些功能可以演示？
遇到的最大问题是什么？
问题最后怎么解决？
当前系统最不稳定的地方是什么？
下周要优先解决什么？
本周能写进简历的一句话是什么？
```

## 技术知识清单

### OpenAI API

必须掌握：

- Responses API
- instructions
- input
- output_text
- streaming
- previous_response_id
- function calling
- structured outputs
- embeddings
- usage
- error handling

掌握标准：

```text
能独立封装一个模型调用模块。
能解释每个参数的职责。
能处理失败、重试、超时和取消。
```

### Streaming

必须掌握：

- `stream: true`
- SSE
- fetch stream
- delta 追加
- done 事件
- abort
- loading 状态
- 代理缓冲问题

掌握标准：

```text
用户能看到模型逐步输出。
用户能中途停止。
服务端能同步取消 OpenAI 请求。
```

### Tool Calling

必须掌握：

- tool schema
- arguments
- 参数校验
- 工具执行器
- 工具结果回传
- 权限控制
- 人工确认

掌握标准：

```text
模型可以请求工具，但只有你的程序能决定是否执行。
```

### RAG

必须掌握：

- document loader
- chunk
- embedding
- vector search
- metadata
- rerank
- context packing
- citation
- retrieval eval

掌握标准：

```text
回答必须基于检索结果，并能给出引用来源。
```

### Agent Workflow

必须掌握：

- router
- planner-executor
- workflow
- agent loop
- retry
- timeout
- human-in-the-loop
- trace

掌握标准：

```text
能解释为什么你的系统不是简单聊天框，而是可控 Agent 工作流。
```

### Evaluation

必须掌握：

- eval dataset
- golden answer
- LLM judge
- bad case
- regression
- metrics

掌握标准：

```text
每次改 prompt 或检索策略后，能用评估集判断效果是否变好。
```

### Agent Frameworks

需要掌握，但不要放在前三个月的第一主线。

框架学习目标：

```text
不是背 API，而是理解框架帮你管理了什么：模型调用、状态、工具、工作流、记忆、trace、human-in-the-loop、部署和评估。
```

建议学习优先级：

```text
第一优先级：LangGraph
第二优先级：LangChain
第三优先级：LlamaIndex
第四优先级：OpenAI Agents SDK
```

原因：

- `LangGraph` 更适合学习生产级 Agent 工作流，因为它强调 state、graph、durable execution、human-in-the-loop 和可控流程。
- `LangChain` 招聘出现频率高，生态大，适合掌握 LLM、prompt、tool、retriever、agent 的常见抽象。
- `LlamaIndex` 在 RAG 和知识库场景里常见，适合补文档索引、检索、数据连接器。
- `OpenAI Agents SDK` 适合理解 OpenAI 官方的 agent 抽象，包括 tools、handoffs、guardrails、sessions、tracing。

三个月内的掌握标准：

```text
LangChain:
- 能用 ChatModel / Prompt / Tool / Retriever 写一个简单链路
- 能解释它和你手写 Responses API 封装的区别
- 能看懂招聘 JD 里的 LangChain 要求

LangGraph:
- 能定义 State
- 能定义 Node
- 能定义 Edge / Conditional Edge
- 能实现一个 review workflow
- 能解释为什么 graph 比自由 agent loop 更可控

LlamaIndex:
- 能理解 Document / Node / Index / Retriever / Query Engine
- 能做一个最小知识库问答
- 能解释它更偏 RAG 数据框架，而不是通用 agent 框架

OpenAI Agents SDK:
- 能理解 Agent / Tool / Handoff / Guardrail / Trace
- 能跑通一个最小 agent
- 能解释它适合 OpenAI 技术栈深度绑定的项目
```

不要求：

```text
不要求同时熟练掌握所有框架。
不要求把主项目完全迁移到框架。
不要求背每个框架的所有 API。
不要求一开始就使用多 agent 框架。
```

推荐学习方式：

```text
先手写一版最小 agent loop。
再用 LangGraph 重写其中一个 workflow。
最后对比两种实现的优缺点。
```

建议在第 8 周后加入框架对照实验：

```text
实验名称：review workflow with LangGraph

输入：用户选择一个 Vue 文件
流程：
1. load_file
2. retrieve_related_context
3. review_code
4. evaluate_review
5. generate_final_report

产出：
- 一张 graph 流程图
- 一份和手写 workflow 的对比文档
- 一段能写进简历的框架经验
```

面试表达：

```text
我先手写过 agent loop 和 tool calling，所以理解底层机制。
后面用 LangGraph 重构了 review workflow，把状态流转、条件分支、错误重试和人工确认显式建模。
这样比完全自由的 agent 更适合企业生产环境，因为流程可控、可观测、可测试。
```

## 学习资料使用顺序

### 第一优先级：OpenAI 官方文档

按顺序看：

```text
Responses API
Streaming
Conversation state
Function calling
Structured outputs
Embeddings
File search / tools
Evaluation
```

目标：

```text
学会底层 API，不依赖框架黑盒。
```

### 第二优先级：hello-agents

按主题查阅：

```text
Agent 基础概念
构建 Agent 框架
记忆与检索
上下文工程
协议
评估
综合案例
毕业设计
```

目标：

```text
补齐 Agent 知识体系，和自己的项目互相印证。
```

### 第三优先级：Agent-Learning-Hub

按阶段取用：

```text
Stage 0：概念边界
Stage 1：最小 agent loop
Stage 2：tool / RAG / memory
Stage 7：evaluation / safety
Stage 8：真实项目交付
Project Ladder：Coding Review Agent
```

目标：

```text
校准行业路线，避免沉迷过时或过宽的方向。
```

### 第四优先级：Agent 框架文档

按顺序看：

```text
LangGraph overview
LangGraph state / node / edge / conditional edge
LangGraph human-in-the-loop
LangGraph persistence / checkpoint
LangChain model / prompt / tool / retriever
LlamaIndex basic RAG
OpenAI Agents SDK overview / tools / tracing / guardrails
```

目标：

```text
形成框架选型能力，而不是依赖框架掩盖底层理解。
```

框架学习验收：

```text
能用 LangGraph 重写一个主项目中的 review workflow。
能解释不用框架、用 LangChain、用 LangGraph 各自的利弊。
能回答企业面试中关于 LangChain / LangGraph 的基础追问。
```

## 不要做的事

三个月内不要把时间大量花在：

- 从头学机器学习数学
- 训练自己的大模型
- 大量刷论文
- 深入多智能体角色扮演框架
- 复刻 Claude Code
- 同时深入 LangChain、LangGraph、LlamaIndex、AutoGen
- 频繁换项目题目
- 只看视频不写代码
- 只做聊天 UI

## 25k offer 能力判断

只会这些，不够：

- 会调 OpenAI API
- 会写 prompt
- 会做聊天框
- 知道 RAG 是什么
- 跑过几个 demo

需要达到：

- 能独立封装 LLM 调用模块。
- 能做流式输出和多轮会话。
- 能设计工具调用和权限边界。
- 能做基础 RAG 并解释 chunk、metadata、召回、引用。
- 能让模型输出结构化结果。
- 能记录工具调用和执行链路。
- 能做 50 条左右评估集。
- 能讲 bad case 和优化过程。
- 能部署并演示完整项目。
- 能把项目讲成业务价值，而不是技术玩具。

## 最终交付物清单

三个月结束时，必须有：

- `frontend-repo-agent` GitHub 仓库
- Vue 前端应用
- 后端 Agent 服务
- 至少 3 个工具
- RAG 检索模块
- structured review 输出
- streaming 聊天体验
- 多轮会话
- 工具调用日志
- 50 条 eval case
- eval report
- bad case report
- Docker 部署
- README
- 架构图
- 3-5 分钟演示视频
- 简历项目描述
- 面试问题答案集

## 最终一句话路线

```text
用 3 个月把自己从 Vue 业务前端，转成能交付一个生产雏形 Agent 系统的 AI 应用工程师。
主线不是学完所有资料，而是围绕 Frontend Repo Agent 持续交付：OpenAI API -> Streaming -> Tool Calling -> RAG -> Structured Output -> Workflow -> Evaluation -> Deployment -> Interview。
```
