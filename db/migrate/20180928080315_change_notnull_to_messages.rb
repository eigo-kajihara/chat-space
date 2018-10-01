class ChangeNotnullToMessages < ActiveRecord::Migration[5.2]
  def change
    def up
      change_column_null :messages, :user_id, false
      change_column_null :messages, :group_id, false
    end

    def down
      change_column_null :messages, :user_id, true
      change_column_null :messages, :group_id, true
    end
  end
end
