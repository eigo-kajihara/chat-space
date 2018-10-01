class ChangeColumnToMessages < ActiveRecord::Migration[5.2]
  def change
    def up
    change_column :messages, :user_id, :string, null: false
    change_column :messages, :group_id, :string, null: false
    end

    def down
    change_column :messages, :user_id, :string, null: true
    change_column :messages, :group_id, :string, null: true
    end
  end
end
