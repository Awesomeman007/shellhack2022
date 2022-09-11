package com.fiu.models;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "AdminDetails")
@Data
@Setter
@Getter
public class AdminDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int AdminId;

    @Column(nullable = false)
    private String UserName;

    @Column(nullable = false)
    private String AdminFullName;

    @Column(nullable = false)
    private String AdminEmailId;

    @Column(nullable = true)
    private String Address;

    @Column(nullable = false)
    private String ZipCode;

    @Column(nullable = true)
    private String ContactNo;

    @Column(nullable = false)
    private Date DatabaseUpdate;

}
