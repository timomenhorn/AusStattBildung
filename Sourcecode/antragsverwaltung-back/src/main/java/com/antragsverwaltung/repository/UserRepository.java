package com.antragsverwaltung.repository;

import com.antragsverwaltung.model.User;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import java.util.List;

import static javax.transaction.Transactional.TxType.REQUIRED;
import static javax.transaction.Transactional.TxType.SUPPORTS;

@Transactional(SUPPORTS)
public class UserRepository {

    @PersistenceContext(unitName = "antragsverwaltungPU")
    private EntityManager em;

    public User find(Integer id) {
        return em.find(User.class, id);
    }

    @Transactional(REQUIRED)
    public User create(User user) {
        em.persist(user);
        return user;
    }

    @Transactional(REQUIRED)
    public void delete(Integer id) {
        em.remove(em.getReference(User.class, id));
    }

    public List<User> findAll() {
        TypedQuery<User> query = em.createQuery("SELECT u from User u order by  u.id", User.class);
        return query.getResultList();
    }
}
