import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Start extends StatefulWidget {
  const Start({super.key});

  @override
  StartState createState() => StartState();
}

class StartState extends State<Start> {
  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('MediScan'),
        centerTitle: true,
        backgroundColor: const Color.fromARGB(
            255, 223, 234, 243), // Add the desired color here
      ),
      backgroundColor: Colors.white,
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(20.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              SvgPicture.asset(
                'assets/images/Start.svg',
                semanticsLabel: 'My SVG Image',
                height: 400,
                width: 400,
              ),
              const SizedBox(height: 30),
              const Text(
                "If you already registered you can continue here",
                style: TextStyle(
                  fontSize: 16,
                  color: Colors.black,
                ),
                textAlign: TextAlign.center,
              ),
              const SizedBox(height: 10),
              ElevatedButton(
                onPressed: () {},
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.lightBlue, // Button color
                  padding:
                      const EdgeInsets.symmetric(horizontal: 32, vertical: 12),
                  textStyle: const TextStyle(
                    fontSize: 18,
                  ),
                ),
                child: const Text(
                  "Continue as a User",
                  style: TextStyle(
                    color: Colors.white,
                  ),
                ),
              ),
              const SizedBox(height: 20),
              const Text(
                "If you are a guest continue here:",
                style: TextStyle(
                  fontSize: 16,
                  color: Colors.black,
                ),
                textAlign: TextAlign.center,
              ),
              const SizedBox(height: 10),
              TextButton(
                onPressed: () {},
                style: TextButton.styleFrom(
                  foregroundColor: Colors.lightBlue,
                  textStyle: const TextStyle(
                    fontSize: 18,
                  ),
                ),
                child: const Text("Continue as a Guest"),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
