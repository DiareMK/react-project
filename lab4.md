# Звіт до Лабораторної роботи №4

## 1. Опис структури маршрутів

У додатку реалізовано ієрархічну систему маршрутів:
- `/` — Головна сторінка (`Home`).
- `/feed` — Стрічка новин та керування студентами (`Feed`).
- `/feed/:postId` — Сторінка окремого посту з динамічним параметром (`PostPage`).
- `/profile/*` — Секція профілю з вкладеними маршрутами.
  - `/profile/` — Огляд профілю (`ProfileOverview`).
  - `/profile/settings` — Налаштування (`ProfileSettings`).
- `*` — Обробка неіснуючих шляхів (`NotFound`).

## 2. Фрагменти коду

### Конфігурація Routes (`App.jsx`):
```jsx
<Routes>
  <Route path="/" element={<MainLayout />}>
    <Route index element={<Home />} />
    <Route path="feed" element={<Feed />} />
    <Route path="feed/:postId" element={<PostPage />} />
    <Route path="profile/*" element={<Profile />} />
    <Route path="*" element={<NotFound />} />
  </Route>
</Routes>
```

### Layout з Outlet (`MainLayout.jsx`):
```jsx
const MainLayout = () => {
  return (
    <div className={styles.container}>
      <nav>...</nav>
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
};
```

### Обробка параметрів та useNavigate (`PostPage.jsx`):
```jsx
const { postId } = useParams();
const navigate = useNavigate();
// ... знаходження посту ...
<button onClick={() => navigate(-1)}>Повернутися</button>
```

### Програмна навігація (`ProfileSettings.jsx`):
```jsx
const navigate = useNavigate();
const handleSave = () => {
  alert('Збережено!');
  navigate('/');
};
```

## 3. Відповіді на контрольні запитання

**Яка різниця між серверною та клієнтською маршрутизацією?**
При серверній маршрутизації кожен перехід за посиланням ініціює запит до сервера, який повертає нову HTML-сторінку (повне перезавантаження). При клієнтській маршрутизації (React Router) переходи відбуваються без перезавантаження сторінки: бібліотека перехоплює зміну URL і просто змінює компоненти в DOM "на льоту".

**Яка роль атрибута index у конфігурації маршрутів?**
Атрибут `index` позначає маршрут за замовчуванням (Default Route) для батьківського компонента. Він рендериться тоді, коли шлях у URL точно збігається зі шляхом батька.

**Як використовувати useNavigate для програмної навігації?**
Хук `useNavigate` повертає функцію, яка дозволяє змінювати URL програмно. Приклад: `navigate('/home')` для переходу вперед або `navigate(-1)` для повернення на попередню сторінку в історії браузера.

**Як реалізувати підсвічування активних посилань?**
Використовується компонент `NavLink`. Він автоматично додає клас `active` до активного посилання. Стилізувати можна через функцію в `className` або `style`: `({ isActive }) => (isActive ? 'active-class' : '')`.

**Що таке catch-all маршрути (wildcard) і навіщо вони?**
Це маршрути зі шляхом `*`. Вони відповідають будь-якому URL, який не збігся з жодним іншим визначеним маршрутом. Використовуються для відображення сторінки 404 (NotFound).

---
**Коміт:** ЛР4: feat: setup react router and multi-page navigation
