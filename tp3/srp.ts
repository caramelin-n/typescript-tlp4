interface User {
    username: string;
    email: string;
}

class UserValidator {
    isValid(email: string): boolean {
        return email.includes("@") && email.includes(".");
    }
}

class UserRepository {
    private users: User[] = [];

    save(user: User): void {
        this.users.push(user);
    }

    list(): User[] {
        return [...this.users];
    }
}

class EmailService {
    sendWelcomeEmail(email: string): void {
        console.log(`Email de bienvenida enviado a ${email}`);
    }
}

class UserRegistrationService {
    private validator: UserValidator;
    private repository: UserRepository;
    private emailService: EmailService;

    constructor(
        validator: UserValidator,
        repository: UserRepository,
        emailService: EmailService
    ) {
        this.validator = validator;
        this.repository = repository;
        this.emailService = emailService;
    }

    register(user: User): boolean {
        if (!this.validator.isValid(user.email)) {
            console.log(`Email inválido: ${user.email}`);
            return false;
        }

        this.repository.save(user);
        console.log(`Usuario registrado: ${user.username}`);
        this.emailService.sendWelcomeEmail(user.email);

        return true;
    }
}

const repository = new UserRepository();
const registrationService = new UserRegistrationService(
    new UserValidator(),
    repository,
    new EmailService()
);

registrationService.register({
    username: "Elin",
    email: "elin@example.com"
});

registrationService.register({
    username: "Sin correo",
    email: "correo-invalido"
});

console.log(repository.list());
