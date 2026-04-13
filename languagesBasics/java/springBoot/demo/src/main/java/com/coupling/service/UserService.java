package com.coupling.service;

import com.coupling.dto.SignUpRequest;
import com.coupling.dto.UpdateUserRequest;
import com.coupling.model.User;

import java.util.List;

public interface UserService {
    User createUser(SignUpRequest request);
    List<User> getAllUsers();
    User getUserById(String id);
    User getUserByEmail(String email);
    User updateUser(String id, UpdateUserRequest request);
    void deleteUser(String id);
}
