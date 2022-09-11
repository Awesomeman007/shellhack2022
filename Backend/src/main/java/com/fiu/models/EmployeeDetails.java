package com.fiu.models;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "EmployeeDetails")
@Data
@Setter
@Getter
public class EmployeeDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int EmployeeId;

    @Column(nullable = false)
    private String UserName;

    @Column(nullable = false)
    private String EmployeeFullName;

    @Column(nullable = false)
    private String EmailId;

    @Column(nullable = true)
    private String Address;

    @Column(nullable = false)
    private String ZipCode;

    @Column(nullable = true)
    private String ContactNo;

    @Column(nullable = false)
    private Date DatabaseUpdate;
}
