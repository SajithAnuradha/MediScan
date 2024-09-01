import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:mediscan/features/auth/repository/auth_remote_repository.dart';

class Signup extends StatefulWidget {
  const Signup({super.key});

  @override
  SignupState createState() => SignupState();
}

class SignupState extends State<Signup> {
  final nameController = TextEditingController();
  String? _nameError;
  String? _storedName;

  final emailController = TextEditingController();
  String? _emailError;
  String? _storedEmail;
  final phoneController = TextEditingController();
  String? _phoneError;
  String? _storedPhone;

  final ageController = TextEditingController();
  String? _ageError;
  int? _storedage;
  final genderController = TextEditingController();
  String? _genderError;
  String? _storedGender;
  final passwordController = TextEditingController();
  final confirmPasswordController = TextEditingController();
  String? _passwordError;
  String? _confirmPasswordError;

  void dispose() {
    nameController.dispose();
    emailController.dispose();
    phoneController.dispose();
    ageController.dispose();
    genderController.dispose();
    passwordController.dispose();
    confirmPasswordController.dispose();
    super.dispose();
  }

  bool _isNameValid(String name) {
    return name.isNotEmpty;
  }

  bool _isEmailValid(String email) {
    final emailRegex = RegExp(r'^[^@]+@[^@]+\.[^@]+');
    return emailRegex.hasMatch(email);
  }

  bool _isPhoneValid(String contact) {
    final contactRegex = RegExp(r'^\d{10}$'); // Example: 10 digit phone number
    return contactRegex.hasMatch(contact);
  }

  bool _isAgeValid(int age) {
    return age > 0;
  }

  bool _isgenderValid(String gender) {
    return gender.isNotEmpty;
  }

  bool _isPasswordValid(String password) {
    return password.isNotEmpty; // Add any additional validation logic if needed
  }

  bool _doPasswordsMatch(String password, String confirmPassword) {
    return password == confirmPassword;
  }

  void _submit() {
    setState(() {
      if (_isEmailValid(emailController.text)) {
        _emailError = null;
        _storedEmail = emailController.text;
      } else {
        _emailError = 'Invalid email';
      }
      if (_isgenderValid(genderController.text)) {
        _ageError = null;
        _storedGender = genderController.text;
      }

      if (_isNameValid(nameController.text)) {
        _nameError = null;
        _storedName = nameController.text;
      } else {
        _nameError = 'Invalid name';
      }

      if (_isPhoneValid(phoneController.text)) {
        _phoneError = null;
        _storedPhone = phoneController.text;
      } else {
        _phoneError = 'Invalid phone number';
      }

      if (_isAgeValid(int.parse(ageController.text))) {
        _ageError = null;
        _storedage = int.parse(ageController.text);
      } else {
        _ageError = 'Invalid age';
      }
      final password = passwordController.text;
      final confirmPassword = confirmPasswordController.text;

      if ((_isPasswordValid(password)) &&
          (_doPasswordsMatch(password, confirmPassword))) {
        _passwordError = null;
        _confirmPasswordError = null;
      } else {
        if (!_isPasswordValid(password)) {
          _passwordError = 'Please enter valid password';
        } else {
          _passwordError = null;
        }
      }
    });

    if (_emailError == null &&
        _nameError == null &&
        _phoneError == null &&
        _ageError == null &&
        _passwordError == null &&
        _confirmPasswordError == null) {
      AuthRemoteRepository().signup(
        email: _storedEmail!,
        name: _storedName!,
        phonenumber: _storedPhone!,
        age: _storedage!,
        gender: _storedGender!,
        password: passwordController.text,
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('MediScan'),
        centerTitle: true,
        backgroundColor: const Color.fromARGB(255, 223, 234, 243),
        leading: IconButton(
          icon: const Icon(Icons.arrow_back),
          onPressed: () {},
        ),
      ),
      backgroundColor: Colors.white,
      body: Center(
        child: SingleChildScrollView(
          child: Padding(
            padding: const EdgeInsets.all(20.0),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                SvgPicture.asset(
                  'images/Login.svg',
                  semanticsLabel: 'My SVG Image',
                  height: 200,
                ),
                const Align(
                  alignment: Alignment.bottomLeft,
                  child: Text(
                    'Signup',
                    style: TextStyle(
                      fontSize: 25,
                      color: Colors.black,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ),
                const SizedBox(height: 20),
                const Text('Or, Sign with'),
                const SizedBox(height: 10),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    IconButton(
                      icon: SvgPicture.asset('images/Google.svg'),
                      onPressed: () {
                        // Handle Google login logic
                      },
                    ),
                    const SizedBox(width: 10),
                    IconButton(
                      icon: Image.asset('images/Fb.png'),
                      onPressed: () {
                        // Handle Facebook login logic
                      },
                    ),
                    const SizedBox(width: 10),
                    IconButton(
                      icon: SvgPicture.asset('images/Apple.svg'),
                      onPressed: () {
                        // Handle Apple login logic
                      },
                    ),
                  ],
                ),
                const SizedBox(height: 20),
                TextField(
                  decoration: InputDecoration(
                    prefixIcon: SvgPicture.asset('images/email-icon.svg',
                        height: 5, width: 5, fit: BoxFit.scaleDown),
                    labelText: 'Email ID',
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(10),
                    ),
                    errorText: _emailError,
                  ),
                  controller: emailController,
                ),
                const SizedBox(height: 20),
                TextField(
                  obscureText: true,
                  decoration: InputDecoration(
                    prefixIcon: SvgPicture.asset('images/full-name-icon.svg',
                        height: 5, width: 5, fit: BoxFit.scaleDown),
                    labelText: 'Full Name',
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(10),
                    ),
                    errorText: _nameError,
                  ),
                  controller: nameController,
                ),
                const SizedBox(height: 20),
                TextField(
                  obscureText: true,
                  decoration: InputDecoration(
                    prefixIcon: SvgPicture.asset('images/phone-number-icon.svg',
                        height: 5, width: 5, fit: BoxFit.scaleDown),
                    labelText: 'Phone Number',
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(10),
                    ),
                    errorText: _phoneError,
                  ),
                  controller: phoneController,
                ),
                const SizedBox(height: 20),
                TextField(
                  obscureText: true,
                  decoration: InputDecoration(
                    prefixIcon: SvgPicture.asset(
                        'images/specialization-icon.svg',
                        height: 5,
                        width: 5,
                        fit: BoxFit.scaleDown),
                    labelText: 'Age',
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(10),
                    ),
                    errorText: _ageError,
                  ),
                  controller: ageController,
                ),
                const SizedBox(height: 20),
                TextField(
                  obscureText: true,
                  decoration: InputDecoration(
                    prefixIcon: SvgPicture.asset('images/full-name-icon.svg',
                        height: 5, width: 5, fit: BoxFit.scaleDown),
                    labelText: 'Gender',
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(10),
                    ),
                    errorText: _genderError,
                  ),
                  controller: genderController,
                ),
                const SizedBox(height: 20),
                TextField(
                  obscureText: true,
                  decoration: InputDecoration(
                    prefixIcon: SvgPicture.asset('images/password-icon.svg',
                        height: 5, width: 5, fit: BoxFit.scaleDown),
                    labelText: 'Password',
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(10),
                    ),
                    errorText: _passwordError,
                  ),
                  controller: passwordController,
                ),
                const SizedBox(height: 20),
                TextField(
                  obscureText: true,
                  decoration: InputDecoration(
                    prefixIcon: SvgPicture.asset('images/password-icon.svg',
                        height: 5, width: 5, fit: BoxFit.scaleDown),
                    labelText: 'Confirm Password',
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(10),
                    ),
                    errorText: _confirmPasswordError,
                  ),
                  controller: confirmPasswordController,
                ),
                const SizedBox(height: 20),
                ElevatedButton(
                  onPressed: () {
                    // Handle login logic
                  },
                  style: ElevatedButton.styleFrom(
                    minimumSize: const Size.fromHeight(50),
                    backgroundColor: Colors.blue,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(20),
                    ),
                  ),
                  child: const Text(
                    'Sign Up',
                    style: TextStyle(color: Colors.white),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
