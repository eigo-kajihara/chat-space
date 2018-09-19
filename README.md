# README

## usersテーブル
|Column            |Type    |Options    |
|------------------|--------|-----------|
|encrypted_password|string  |null: false|
|name              |string  |null: false|
|email             |string  |null: false|

### Association
- has_many :messages
- has_many :groups through: :members

## messagesテーブル
|Column  |Type   |Options                     |
|--------|-------|----------------------------|
|image   |text   |null: false                 |
|text    |text   |null: false                 |
|user_id |integer|foreign_key: true, add_index|
|group_id|integer|foreign_key: true, add_index|

### Association
- belongs_to :user
- belongs_to :group

## membersテーブル

|Column  |Type   |Options                     |
|--------|-------|----------------------------|
|user_id |integer|foreign_key: true, add_index|
|group_id|integer|foreign_key: true, add_index|

### Association
- belongs_to :group
- belongs_to :user

## groupsテーブル

|Column  |Type  |Options    |
|--------|------|-----------|
|name    |string|null: false|

### Association
- has_many :users through: :members
