
let userRepo = new UserRepo(userData);
let randomUser = Math.round(Math.random() * (50 - 1) + 1);
let infoFromUser = userRepo.returnUserID(randomUser);
let user = new User(infoFromUser);

let firstName = user.returnFirstName();
$('.first-name').html(firstName);

$('.id-from-user').html(randomUser);


$('.avg-users-stepgoal').html(userRepo.returnAvgStepGoal());