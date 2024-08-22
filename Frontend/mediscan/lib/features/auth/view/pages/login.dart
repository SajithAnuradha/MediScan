import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Login extends StatefulWidget {
  const Login({super.key});

  @override
  LoginState createState() => LoginState();
}

class LoginState extends State<Login> {
  final emailController = TextEditingController();
  String? emailError;
  String? storedemail;
  final passwordController = TextEditingController();
  String? passwordError;
  String? storedpassword;

  @override
  void dispose() {
    emailController.dispose();
    passwordController.dispose();
    super.dispose();
  }

  bool _isValidEmail(String email) {
    final emailRegex = RegExp(r'^[^@]+@[^@]+\.[^@]+');
    return emailRegex.hasMatch(email);
  }

  bool _isPasswordValid(String password) {
    return password.isNotEmpty; // Add any additional validation logic if needed
  }

  void _submit() {
    setState(() {
      if (!_isValidEmail(emailController.text)) {
        emailError = 'Please enter a valid email';
      } else {
        emailError = null;
      }

      if (!_isPasswordValid(passwordController.text)) {
        passwordError = 'Please enter a valid password';
      } else {
        passwordError = null;
      }
    });
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
          )),
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
                const SizedBox(height: 20),
                const Align(
                  alignment: Alignment.bottomLeft,
                  child: Text(
                    'Login',
                    style: TextStyle(
                      fontSize: 25,
                      color: Colors.black,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
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
                    errorText: emailError,
                  ),
                  controller: emailController,
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
                    suffixText: 'Forgot?',
                    suffixStyle: const TextStyle(color: Colors.blue),
                    errorText: passwordError,
                  ),
                  controller: passwordController,
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
                      borderRadius: BorderRadius.circular(10),
                    ),
                  ),
                  child: const Text(
                    'Login',
                    style: TextStyle(color: Colors.white),
                  ),
                ),
                const SizedBox(height: 20),
                const Text('Or, login with'),
                const SizedBox(height: 10),
                Row(
                  // mainAxisAlignment: MainAxisAlignment.center,
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
                GestureDetector(
                    onTap: () {
                      // Handle registration logic
                    },
                    child: RichText(
                      text: const TextSpan(
                          text: 'New to this platform  ',
                          style: TextStyle(color: Colors.black),
                          children: [
                            TextSpan(
                              text: 'Register',
                              style: TextStyle(
                                  color: Colors.blue,
                                  decoration: TextDecoration.underline),
                            ),
                          ]),
                    )),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
