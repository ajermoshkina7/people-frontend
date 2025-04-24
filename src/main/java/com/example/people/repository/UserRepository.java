package com.example.people.repository;



import com.example.people.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    void deleteUserByEmail(String email);

    User findUserByEmail(String email);
}
