# README

## usersテーブル
|Column            |Type    |Options                             |
|------------------|--------|------------------------------------|
|encrypted_password|string  |null: false                         |
|name              |string  |null: false, unique: true, add_index|
|email             |string  |null: false                         |

### Association
- has_many :messages
- has_many :groups through: :members

## messagesテーブル
|Column  |Type   |Options          |
|--------|-------|-----------------|
|image   |text   |null: false      |
|text    |text   |null: false      |
|user_id |integer|foreign_key: true|
|group_id|integer|foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## membersテーブル

|Column  |Type   |Options          |
|--------|-------|-----------------|
|user_id |integer|foreign_key: true|
|group_id|integer|foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## groupsテーブル

|Column  |Type  |Options                             |
|--------|------|------------------------------------|
|name    |string|null: false, unique: true, add_index|

### Association
_ has_many :messages
- has_many :members
- has_many :users through: :members
