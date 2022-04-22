const { role } = user;
return role === ADMIN ? <AdminUser /> : <NormalUser />;

// good
