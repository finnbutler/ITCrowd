package com.itcrowd.data.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.itcrowd.data.model.Account;

import java.util.List;

public interface AccountRepository extends JpaRepository<Account, Long> {
}
