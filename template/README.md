# {{ name }}

> {{ description }}

## 构建步骤

``` bash
# 安装依赖文件
npm install

# 启动服务 localhost:8080
npm run dev

# 构建测试环境
npm run qa

# 构建演示环境
npm run demo

# 构建生产环境
npm run build

# 建立生产和查看包分析报告
npm run build --report
{{#unit}}

# 运行单元测试
npm run unit
{{/unit}}
{{#e2e}}

# run e2e tests
npm run e2e
{{/e2e}}
{{#if_or unit e2e}}

# run all tests
npm test
{{/if_or}}
```
