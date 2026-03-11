# Звіт до Лабораторної роботи №5

## 1. Конфігурація AuthContext.jsx

Контекст забезпечує глобальний стан авторизації:
- `isAuthenticated`: прапорець стану входу.
- `user`: об'єкт з даними користувача.
- `login(userData)`: функція для входу та збереження даних у `localStorage`.
- `logout()`: функція для виходу.

```jsx
const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  // ... логика login/logout ...
  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
```

## 2. Реалізація ProtectedRoute.jsx

Компонент вищого порядку (HOC), який обмежує доступ до маршрутів:

```jsx
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
```

## 3. Відповіді на контрольні запитання

**Яку архітектурну проблему вирішує Context API?**
Context API вирішує проблему **prop drilling** — необхідності передавати дані через багато рівнів вкладеності компонентів, навіть якщо проміжним компонентам ці дані не потрібні. Контекст дозволяє надавати доступ до даних будь-якому компоненту в дереві напряму.

**Чому іноді обирають Redux/Zustand замість Context API?**
Context API не призначений для часто оновлюваних станів у великих додатках, оскільки будь-яка зміна в контексті змушує всі компоненти-споживачі перерендеритися. Redux або Zustand пропонують кращу оптимізацію продуктивності (селектори), інструменти для налагодження (DevTools) та більш структурований підхід до складного стану.

**Яка роль HOC при реалізації захищених маршрутів?**
Higher-Order Components (HOC) дозволяють винести логіку перевірки прав доступу в окрему абстракцію. Це робить код чистішим, оскільки ми можемо просто обгорнути будь-який компонент сторінки в `ProtectedRoute`, не дублюючи перевірку `if (isAuthenticated)` всередині кожної сторінки.

**Чому використовується replace: true при перенаправленні на сторінку входу?**
Атрибут `replace: true` замінює поточний запис в історії браузера замість того, щоб додавати новий. Це важливо для UX: якщо користувача перенаправило з захищеної сторінки на `/login`, після успішного входу він не повинен потрапити назад на сторінку входу, натиснувши кнопку "Назад" у браузері. Це робить навігацію лінійною та логічною.

---
**Коміт:** ЛР5: feat: add authentication system
