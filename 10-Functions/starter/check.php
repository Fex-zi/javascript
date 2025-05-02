<?php
class Poll
{
    public function __construct(
        public string $question,
        public array $options,
        public array $answers = []
    ) {
        // Initialize answers array if not provided
        if (empty($this->answers)) {
            $this->answers = array_fill(0, count($options), 0);
        }
    }

    public function registerNewAnswer(int $answer): void
    {
        // Validate and register the answer
        if ($answer >= 0 && $answer < count($this->answers)) {
            $this->answers[$answer]++;
        }
    }

    public function displayResults(string $type = 'array'): string
    {
        if ($type === 'array') {
            return json_encode($this->answers);
        } else {
            return "Poll results are " . implode(', ', $this->answers);
        }
    }

    // This would be an API endpoint in a modern PHP application
    public function handlePollSubmission(array $requestData): array
    {
        if (isset($requestData['answer'])) {
            $this->registerNewAnswer((int)$requestData['answer']);
        }

        return [
            'arrayResults' => $this->displayResults(),
            'stringResults' => $this->displayResults('string')
        ];
    }
}

// Usage in a modern PHP API
$poll = new Poll(
    'What is your favourite programming language?',
    ['0: JavaScript', '1: PHP', '2: Python', '3: C++']
);

// API endpoint example
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    header('Content-Type: application/json');
    echo json_encode($poll->handlePollSubmission($_POST));
    exit;
}

// Examples of using the displayResults with different data
$customResults1 = (new Poll('', [], [5, 2, 3]))->displayResults('string');
echo $customResults1 . "\n";

$customResults2 = (new Poll('', [], [1, 5, 3, 9, 6, 1]))->displayResults('string');
echo $customResults2 . "\n";

$customResults3 = (new Poll('', [], [1, 5, 3, 9, 6, 1]))->displayResults('array');
echo $customResults3 . "\n";

?>

<!-- HTML form that would trigger the PHP code -->
<form method="POST">
    <input type="number" name="answer" min="0" max="3">
    <button type="submit" name="submit_poll">Submit</button>
</form>