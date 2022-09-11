package com.fiu.models;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;

@Data
@Setter
@Getter
@Entity
@Table(name = "UserDetails_Table")
public class UserDetails {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private int UserId;

    @Column(nullable = false)
    private String UserName;

    @Column(nullable = false)
    private String Password;

    @Column(nullable = false)
    private String UserFullName;

    @Column(nullable = false)
    private String Role;

}
