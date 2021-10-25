package com.itcrowd.data.controller;

import com.itcrowd.data.model.Account;
import com.itcrowd.data.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * AccountController defines API endpoints for ACCOUNT data.
 */
@CrossOrigin(origins = "http://localhost:8801")
@RestController
@RequestMapping("/api")
public class AccountController {
    @Autowired
    AccountRepository accountRepository;

    @GetMapping("/accounts")
    public ResponseEntity<List<Account>> getAllAccounts() {
        try {
            List<Account> accounts = new ArrayList<>(accountRepository.findAll());

            if (accounts.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(accounts, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/accounts")
    public ResponseEntity<Account> createAccount(@RequestBody Account account) {
        try {
            Account _account = accountRepository.save(new Account(account.getPasswordHash(), account.getHashAlgorithm(), account.getEmail(), account.getPhone(), account.getFirstName(), account.getLastName(), account.getPostcode(), account.getGender(), account.getBiography()));
            return new ResponseEntity<>(_account, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
