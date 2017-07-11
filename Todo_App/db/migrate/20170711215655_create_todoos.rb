class CreateTodoos < ActiveRecord::Migration[5.0]
  def change
    create_table :todoos do |t|
      t.string :title, null:false
      t.string :body, null:false
      t.boolean :done, null:false

      t.timestamps
    end
  end
end
