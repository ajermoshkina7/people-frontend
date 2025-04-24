package com.example.people.mapper;

import com.example.people.dto.UserDto;
import com.example.people.entity.User;



public class UserMapper {

    public static UserDto mapToUserDto(User user) {
        return new UserDto(
                user.getId(),
                user.getFirstName(),
                user.getLastName(),
                user.getEmail(),
                user.getBirthday()
        );
    }

    public static User maptoUser(UserDto userDto) {
        return new User(
                userDto.getId(),
                userDto.getFirstName(),
                userDto.getLastName(),
                userDto.getBirthday(),
                userDto.getEmail()
        );

    }
}
