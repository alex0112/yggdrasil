class CreateTrees < ActiveRecord::Migration[5.1]
  def change
    create_table :trees do |t|
      t.string :name
      t.json :data

      t.timestamps
    end
  end
end
