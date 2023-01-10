# SS仕様書

## システム方式

### バックエンド

Supabaseを利用。
無料枠利用はPostgres 500MB
ストレージ50MB

### フロントエンド

Next.js + Typescriptを利用。
UIのフレームワークとしてMUI v5を利用。
React Testing Frameworkでテストを行う。

### データベース

```mermaid
erDiagram
    User ||--o{ GroupHas : ""
    Group ||--o{ GroupHas : ""
    Group ||--|{ ScenarioList : ""
    User {
      UUID user_id PK
      timestamp created_at
      timestamp updated_at
    }
    Group {
      UUID group_id PK
      string group_name
      string group_description
      string group_key
      timestamp created_at
      timestamp updated_at
    }
    GroupHas {
      UUID user_id PK
      UUID group_id PK
    }
    ScenarioList {
      int scenario_number PK
      UUID group_id PK
      string scenario_name
      string scenario_description
      string image_key
      string read_by
      string created_by
      string updated_by
      timestamp created_at
      timestamp updated_at
    }
```
