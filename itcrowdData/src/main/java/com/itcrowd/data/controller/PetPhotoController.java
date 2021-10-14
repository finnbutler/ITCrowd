package com.itcrowd.data.controller;

import com.itcrowd.data.model.PetPhoto;
import com.itcrowd.data.repository.PetPhotoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class PetPhotoController {
    @Autowired
    PetPhotoRepository petPhotoRepository;

    @GetMapping("/pet_photos")
    public ResponseEntity<List<PetPhoto>> getAllPetPhotos() {
        try {
            List<PetPhoto> petPhotos = new ArrayList<>(petPhotoRepository.findAll());

            if (petPhotos.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(petPhotos, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
