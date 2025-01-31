package com.antragsverwaltung.repository;

import com.antragsverwaltung.model.Role;
import com.antragsverwaltung.model.User;
import org.jboss.arquillian.container.test.api.Deployment;
import org.jboss.arquillian.junit.Arquillian;
import org.jboss.shrinkwrap.api.ShrinkWrap;
import org.jboss.shrinkwrap.api.asset.EmptyAsset;
import org.jboss.shrinkwrap.api.spec.JavaArchive;
import org.junit.Test;
import org.junit.runner.RunWith;

import javax.inject.Inject;

import static org.junit.Assert.*;

@RunWith(Arquillian.class)
public class UserRepositoryTest {

    @Inject
    private UserRepository userRepository;

    @Test
    public void create() {
        assertEquals(0, userRepository.findAll().size());

        User user = new User(1, "menhorti", "7c97253d54d440435b2f86497377af4d", Role.ADMIN);
        user = userRepository.create(user);
        Integer userId = user.getId();
        assertNotNull(userId);

        User userFound = userRepository.find(userId);

        assertEquals("menhorti", userFound.getUsername());

        assertEquals(0, userRepository.findAll().size());
    }

    @Deployment
    public static JavaArchive createDeployment() {
        return ShrinkWrap.create(JavaArchive.class)
                .addClass(UserRepository.class)
                .addClass(User.class)
                .addClass(Role.class)
                .addAsManifestResource(EmptyAsset.INSTANCE, "beans.xml")
                .addAsManifestResource("META-INF/test-persistence.xml", "persistence.xml");
    }
}
