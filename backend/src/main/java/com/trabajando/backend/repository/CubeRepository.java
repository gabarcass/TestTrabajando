package com.trabajando.backend.repository;

//import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.trabajando.backend.model.Cube;

public interface CubeRepository extends MongoRepository<Cube, String> {

//	String save(Cube cube);

}
