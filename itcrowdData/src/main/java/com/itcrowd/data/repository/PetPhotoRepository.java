package com.itcrowd.data.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.itcrowd.data.model.PetPhoto;

import java.util.List;

public interface PetPhotoRepository extends JpaRepository<PetPhoto, Long> {
}
