package com.coupling.controller;

import com.coupling.dto.AuthResponse;
import com.coupling.dto.LoginRequest;
import com.coupling.dto.SignUpRequest;
import com.coupling.dto.UserResponse;
import com.coupling.model.User;
import com.coupling.response.ResponseWrapper;
import com.coupling.security.CustomUserDetailsService;
import com.coupling.security.JwtUtil;
import com.coupling.service.UserService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserService userService;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;
    private final CustomUserDetailsService userDetailsService;

    public AuthController(UserService userService,
                          AuthenticationManager authenticationManager,
                          JwtUtil jwtUtil,
                          CustomUserDetailsService userDetailsService) {
        this.userService = userService;
        this.authenticationManager = authenticationManager;
        this.jwtUtil = jwtUtil;
        this.userDetailsService = userDetailsService;
    }

    @PostMapping("/signup")
    public ResponseEntity<ResponseWrapper<AuthResponse>> register(@Valid @RequestBody SignUpRequest request) {
        User created = userService.createUser(request);
        UserDetails userDetails = userDetailsService.loadUserByUsername(created.getEmail());
        String token = jwtUtil.generateToken(userDetails);
        ResponseCookie cookie = ResponseCookie.from("jwt", token)
                .httpOnly(true)
                .path("/")
                .maxAge(3600)
                .sameSite("Lax")
                .build();

        AuthResponse authResponse = new AuthResponse(token, new UserResponse(created.getId(), created.getName(), created.getEmail()));
        return ResponseEntity.status(HttpStatus.CREATED)
                .header(HttpHeaders.SET_COOKIE, cookie.toString())
                .body(ResponseWrapper.success(authResponse, HttpStatus.CREATED.value()));
    }

    @PostMapping("/login")
    public ResponseEntity<ResponseWrapper<AuthResponse>> login(@Valid @RequestBody LoginRequest request) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
            );
        } catch (AuthenticationException ex) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(ResponseWrapper.failure("Invalid email or password", HttpStatus.UNAUTHORIZED.value()));
        }

        UserDetails userDetails = userDetailsService.loadUserByUsername(request.getEmail());
        String token = jwtUtil.generateToken(userDetails);
        User user = userService.getUserByEmail(request.getEmail());

        ResponseCookie cookie = ResponseCookie.from("jwt", token)
                .httpOnly(true)
                .path("/")
                .maxAge(3600)
                .sameSite("Lax")
                .build();

        AuthResponse authResponse = new AuthResponse(token, new UserResponse(user.getId(), user.getName(), user.getEmail()));
        return ResponseEntity.ok()
                .header(HttpHeaders.SET_COOKIE, cookie.toString())
                .body(ResponseWrapper.success(authResponse, HttpStatus.OK.value()));
    }
}
