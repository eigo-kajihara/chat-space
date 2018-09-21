# README

## usersテーブル
|Column  |Type    |Options                             |
|--------|--------|------------------------------------|
|name    |string  |null: false, unique: true, add_index|

### Association
- has_many :messages
- has_many :members
- has_many :groups, through: :members

## messagesテーブル
|Column  |Type   |Options                                  |
|--------|-------|-----------------------------------------|
|image   |text   |                                         |
|text    |text   |                                         |
|user_id |integer|foreign_key: true, null: false, add_index|
|group_id|integer|foreign_key: true, null: false, add_index|

### Association
- belongs_to :user
- belongs_to :group

## membersテーブル

|Column  |Type   |Options                       |
|--------|-------|------------------------------|
|user_id |integer|foreign_key: true, null: false|
|group_id|integer|foreign_key: true, null: false|

### Association
- belongs_to :group
- belongs_to :user

## groupsテーブル

|Column  |Type  |Options                  |
|--------|------|-------------------------|
|name    |string|null: false, unique: true|

### Association
- has_many :messages
- has_many :members
- has_many :users, through: :members
