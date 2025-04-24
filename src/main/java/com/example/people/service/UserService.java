package com.example.people.service;

import com.example.people.dto.UserDto;
import com.example.people.entity.User;
import com.example.people.mapper.UserMapper;
import com.example.people.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;


public interface UserService {
    UserDto createUser(UserDto userDto);

    UserDto getUserById(Long userId);

    List<UserDto> getAllUsers();
    UserDto updateUser(Long userId, UserDto updatedUser);
    void deleteUsser(Long userId);


}
