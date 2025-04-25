package com.example.people.service.impl;

import com.example.people.dto.UserDto;
import com.example.people.entity.User;
import com.example.people.exception.ResourceNotFoundException;
import com.example.people.mapper.UserMapper;
import com.example.people.repository.UserRepository;
import com.example.people.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    @Override
    public UserDto createUser(UserDto userDto) {
        User user = UserMapper.maptoUser(userDto);
        User savedUser = userRepository.save(user);
        return UserMapper.mapToUserDto(savedUser);
    }

    @Override
    public UserDto getUserById(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(()->
                        new ResourceNotFoundException("User is not exist with given id : " + userId));

        return UserMapper.mapToUserDto(user);
    }

    @Override
    public List<UserDto> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream().map((user) -> UserMapper.mapToUserDto(user))
                .collect(Collectors.toList());
    }

    @Override
    public UserDto updateUser(Long userId, UserDto updatedUser) {
        User user = userRepository.findById(userId).orElseThrow(
                () -> new ResourceNotFoundException("User is not exist with given id :" + userId));

        user.setFirstName(updatedUser.getFirstName());
        user.setLastName(updatedUser.getLastName());
        user.setBirthday(updatedUser.getBirthday());
        user.setEmail(updatedUser.getEmail());

        User updatedUserObj = userRepository.save(user);
        return UserMapper.mapToUserDto(updatedUserObj);
    }

    @Override
    public void deleteUsser(Long userId) {
        User userToDelete = userRepository.findById(userId).orElseThrow(
                () -> new ResourceNotFoundException("User is not exist with given id :" + userId));

        userRepository.deleteById(userId);
    }
}
