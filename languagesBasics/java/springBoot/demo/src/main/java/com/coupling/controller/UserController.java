package com.coupling.controller;

import com.coupling.dto.UpdateUserRequest;
import com.coupling.dto.UserResponse;
import com.coupling.model.User;
import com.coupling.response.ResponseWrapper;
import com.coupling.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<ResponseWrapper<List<UserResponse>>> getAllUsers() {
        List<UserResponse> users = userService.getAllUsers().stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
        return ResponseEntity.ok(ResponseWrapper.success(users, HttpStatus.OK.value()));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResponseWrapper<UserResponse>> getUserById(@PathVariable String id) {
        User user = userService.getUserById(id);
        return ResponseEntity.ok(ResponseWrapper.success(mapToResponse(user), HttpStatus.OK.value()));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ResponseWrapper<UserResponse>> updateUser(
            @PathVariable String id,
            @Valid @RequestBody UpdateUserRequest request) {
        User updated = userService.updateUser(id, request);
        return ResponseEntity.ok(ResponseWrapper.success(mapToResponse(updated), HttpStatus.OK.value()));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ResponseWrapper<Object>> deleteUser(@PathVariable String id) {
        userService.deleteUser(id);
        return ResponseEntity.ok(ResponseWrapper.success("User deleted successfully", HttpStatus.OK.value()));
    }

    private UserResponse mapToResponse(User user) {
        return new UserResponse(user.getId(), user.getName(), user.getEmail());
    }
}
