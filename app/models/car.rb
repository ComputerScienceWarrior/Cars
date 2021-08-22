class Car < ApplicationRecord
    belongs_to :team

    def average_score
        self.wins / self.losses
    end
end
