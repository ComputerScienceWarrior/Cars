class CreateCars < ActiveRecord::Migration[6.0]
  def change
    create_table :cars do |t|
      t.text :name
      t.integer :wins
      t.integer :losses
      t.integer :attack_power
      t.text :rank
      t.integer :speed
      t.integer :level
      t.integer :team_id

      t.timestamps
    end
  end
end
