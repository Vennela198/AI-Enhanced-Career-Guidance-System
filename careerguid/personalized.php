<?php
session_start();
require 'config.php';

if (!isset($_SESSION['user_id'])) {
    header("Location: login.html");
    exit();
}

// Get user information
$stmt = $conn->prepare("SELECT username, user_type FROM users WHERE id = ?");
$stmt->bind_param("i", $_SESSION['user_id']);
$stmt->execute();
$result = $stmt->get_result();
$user = $result->fetch_assoc();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Personalized Career Guide</title>
    <link rel="stylesheet" href="./css/main.css">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css" rel="stylesheet">
</head>
<body>
    <header>
        <h2>CareerGuide</h2>
        <nav>
            <!-- Your navigation here (same as index.html) -->
        </nav>
        <div class="login">
            <span>Welcome, <?php echo htmlspecialchars($user['username']); ?></span>
            <a href="logout.php">Logout</a>
        </div>
    </header>

    <main>
        <div class="hero">
            <div class="info">
                <div>
                    <h1>Your Personalized <span>Career Path</span></h1>
                    <p>
                        Based on your profile as a <?php echo htmlspecialchars($user['user_type']); ?>, 
                        we've tailored these recommendations just for you.
                    </p>
                </div>
            </div>
            <!-- Rest of your personalized content -->
        </div>
    </main>

    <footer>
        <!-- Your footer here (same as index.html) -->
    </footer>
</body>
</html>