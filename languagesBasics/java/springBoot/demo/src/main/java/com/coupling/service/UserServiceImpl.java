package com.coupling.service;

import com.coupling.dto.SignUpRequest;
import com.coupling.dto.UpdateUserRequest;
import com.coupling.exception.ResourceNotFoundException;
import com.coupling.model.User;
import com.coupling.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public User createUser(SignUpRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new IllegalArgumentException("Email is already in use");
        }
        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        return userRepository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserById(String id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + id));
    }

    @Override
    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with email: " + email));
    }

    @Override
    public User updateUser(String id, UpdateUserRequest request) {
        User existing = getUserById(id);
        if (request.getName() != null && !request.getName().isBlank()) {
            existing.setName(request.getName());
        }
        if (request.getEmail() != null && !request.getEmail().isBlank()) {
            if (!existing.getEmail().equals(request.getEmail()) && userRepository.existsByEmail(request.getEmail())) {
                throw new IllegalArgumentException("Email is already in use");
            }
            existing.setEmail(request.getEmail());
        }
        return userRepository.save(existing);
    }

    @Override
    public void deleteUser(String id) {
        User existing = getUserById(id);
        userRepository.delete(existing);
    }
}
