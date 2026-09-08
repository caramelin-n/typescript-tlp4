interface User {
  username: string;
  email: string;
}

class UserValidator {
    isvalid(email:string): boolean  {
        if (email.includes("@")){
            return false
        } else {
            return true
        }
    }
}

class UserRepository{
    users: User[] = [];

    save(username: string, email: string): void {
        this.users.push({ username, email });
    }
}

class EmailService {
  sendWelcomeEmail(email: string): string {
    return `Email enviado a ${email}`;
  }
}



class UserRegistrationService {
    constructor(
        public userValidator: UserValidator = new UserValidator(),
        public userRepository: UserRepository = new UserRepository(),
        public emailService: EmailService = new EmailService()
    ) {}

    newUser({ username, email }: User){
        this.userValidator.isvalid(email);
        this.userRepository.save(username, email);
        this.emailService.sendWelcomeEmail(email);
    }

}

const users = new UserRegistrationService();
users.newUser({ username: "Melinoe", email:"Melinisabnuy@gmail.com"})

console.log(users)