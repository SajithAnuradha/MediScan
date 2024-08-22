import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class AuthRemoteRepository {
  Future<void> signup({
    required String email,
    required String name,
    required String phonenumber,
    required int age,
    required String gender,
    required String password,
  }) async {
    final response =
        await http.post(Uri.parse('http://127.0.0.1:8000/auth/signup'),
            headers: {
              'Content-Type': 'application/json',
            },
            body: jsonEncode({
              'name': name,
              'email': email,
              'phonenumber': phonenumber,
              'age': age,
              'gender': gender,
              'password': password,
            }));

    if (response.statusCode == 200) {
      print('User created');
    }
    Future<void> login() async {}
  }
}
