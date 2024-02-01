-- phpMyAdmin SQL Dump
-- version 5.2.1-2.fc39
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 01-02-2024 a las 21:26:28
-- Versión del servidor: 10.5.23-MariaDB
-- Versión de PHP: 8.2.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `node_crud_todo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Rols`
--

CREATE TABLE `Rols` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Rols`
--

INSERT INTO `Rols` (`id`, `name`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'Admin', 'Administrador', '2024-01-22 21:39:50', '2024-01-22 21:39:50'),
(2, 'Prog', 'Programador', '2024-01-22 21:39:50', '2024-01-22 21:39:50');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `RolUsers`
--

CREATE TABLE `RolUsers` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `rol_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `RolUsers`
--

INSERT INTO `RolUsers` (`id`, `user_id`, `rol_id`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, '2024-01-22 21:39:50', '2024-01-22 21:39:50'),
(2, 1, 2, '2024-01-22 21:39:50', '2024-01-22 21:39:50'),
(3, 6, 2, '2024-01-22 22:24:49', '2024-01-22 22:24:49'),
(4, 2, 2, '2024-01-30 08:56:39', '2024-01-30 08:56:39');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20240116122249-create-user.js'),
('20240116122627-create-todo.js'),
('20240116122719-create-rol.js'),
('20240116123148-create-rol-user.js'),
('20240116123239-create-todo-user.js'),
('20240130112443-create-users.js');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Todos`
--

CREATE TABLE `Todos` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `time` int(11) DEFAULT NULL,
  `difficulty` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT '0',
  `progress` int(11) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Todos`
--

INSERT INTO `Todos` (`id`, `title`, `description`, `time`, `difficulty`, `status`, `progress`, `createdAt`, `updatedAt`) VALUES
(1, 'fasdf', 'asdfasd', NULL, 'asdfasd', '1', 0, '2024-01-22 21:38:57', '2024-01-22 22:29:23'),
(2, 'fasdf', 'asdfasd', NULL, 'asdfasd', '1', 0, '2024-01-22 21:38:57', '2024-01-22 22:35:14'),
(3, 'prueba', 'akfdsjfklasdjflaksdjf', 2, 'M', '1', 0, '2024-01-29 17:15:02', '2024-01-30 08:10:41'),
(4, 'prueba angular', 'prueba t¡desde angular ', 1, 'XL', '1', 0, '2024-01-29 17:55:14', '2024-01-30 16:46:48'),
(5, 'Dddd', 'prueba', 2, 'S', '1', 100, '2024-01-29 18:01:02', '2024-01-31 12:41:16'),
(6, 'prueba', 'prueba', 2, 'S', '2', 100, '2024-01-29 18:01:02', '2024-01-30 17:12:14'),
(7, 'prueba', 'prueba2', 2, 'XL', '1', 0, '2024-01-29 21:43:34', '2024-01-30 08:27:58'),
(8, 'otra prueba', 'esto es otra prueba', 2, 'XL', '2', 100, '2024-01-30 08:17:56', '2024-01-30 16:43:09'),
(9, 'limpiar la casa', 'limpiar toda la casa', 24, 'XL', '2', 0, '2024-01-30 08:54:20', '2024-01-30 13:07:50'),
(10, 'SssssS', 'testing testing testing', 2, 'S', '2', 100, '2024-01-30 13:07:27', '2024-01-31 12:42:48'),
(11, 'prueba alert', 'prueba alert', 2, 'S', '2', 100, '2024-01-30 18:00:16', '2024-01-30 18:10:24'),
(12, 'prueba angular 3', 'prueba de angular', 4, 'M', '1', 0, '2024-01-30 18:04:53', '2024-01-30 18:10:05'),
(13, 'afsdfasf', 'fasdf', 0, 'S', '1', NULL, '2024-01-30 18:06:10', '2024-01-30 19:11:13'),
(14, 'aldkjfasldk', 'ASKLDJFASLD', 2, 'S', '2', 100, '2024-01-30 18:06:53', '2024-02-01 19:17:41'),
(15, 'Prueba312412', 'Esto es una prueba152152', 150, 'XL', '2', 100, '2024-01-30 18:38:18', '2024-01-30 18:43:13'),
(16, 'fadsfsaf', 'dddd', 2, 'L', '2', 100, '2024-01-31 07:40:52', '2024-01-31 12:32:58'),
(17, 'adsfasdf', 'fadsfdas', 0, 'L', '1', 0, '2024-01-31 12:29:07', '2024-02-01 16:36:39'),
(18, 'fasdfas', 'asdfasdf', 0, 'L', '1', 0, '2024-02-01 19:19:10', '2024-02-01 19:19:23'),
(19, 'fasdfas', 'asdfasdf', 0, 'L', '1', 0, '2024-02-01 19:19:10', '2024-02-01 19:19:23'),
(20, 'fasdfas', 'asdfasdf', 0, 'L', '1', 0, '2024-02-01 19:19:10', '2024-02-01 19:19:23'),
(21, 'fasdfas', 'asdfasdf', 0, 'L', '1', 0, '2024-02-01 19:19:10', '2024-02-01 19:19:23');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `TodoUsers`
--

CREATE TABLE `TodoUsers` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `todo_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `TodoUsers`
--

INSERT INTO `TodoUsers` (`id`, `user_id`, `todo_id`, `createdAt`, `updatedAt`) VALUES
(30, 1, 5, '2024-01-30 08:10:33', '2024-01-30 08:10:33'),
(34, 1, 4, '2024-01-30 08:12:43', '2024-01-30 08:12:43'),
(35, 1, 6, '2024-01-30 08:12:43', '2024-01-30 08:12:43'),
(37, 1, 7, '2024-01-30 08:27:58', '2024-01-30 08:27:58'),
(38, 1, 8, '2024-01-30 08:27:58', '2024-01-30 08:27:58'),
(53, 2, 10, '2024-01-30 13:07:50', '2024-01-30 13:07:50'),
(54, 2, 9, '2024-01-30 13:07:50', '2024-01-30 13:07:50'),
(55, 2, 11, '2024-01-30 18:10:05', '2024-01-30 18:10:05'),
(56, 2, 12, '2024-01-30 18:10:05', '2024-01-30 18:10:05'),
(57, 2, 14, '2024-01-30 18:29:06', '2024-01-30 18:29:06'),
(58, 2, 15, '2024-01-30 18:39:52', '2024-01-30 18:39:52'),
(59, 6, 13, '2024-01-30 19:01:12', '2024-01-30 19:01:12'),
(60, 2, 16, '2024-01-31 07:41:15', '2024-01-31 07:41:15'),
(61, 1, 17, '2024-02-01 16:36:39', '2024-02-01 16:36:39'),
(62, 1, 21, '2024-02-01 19:19:23', '2024-02-01 19:19:23'),
(63, 1, 20, '2024-02-01 19:19:23', '2024-02-01 19:19:23'),
(64, 1, 19, '2024-02-01 19:19:23', '2024-02-01 19:19:23'),
(65, 1, 18, '2024-02-01 19:19:23', '2024-02-01 19:19:23');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `startAt` datetime DEFAULT NULL,
  `endAt` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Users`
--

INSERT INTO `Users` (`id`, `name`, `email`, `password`, `startAt`, `endAt`, `createdAt`, `updatedAt`) VALUES
(1, 'badr', 'badr@daw.com', '$2b$10$xBP6iFs0ewnH1azyuq0BD.bG0c1JZqx0ExjLPas8R3oYTB48DZZDa', NULL, NULL, '2024-01-22 21:39:50', '2024-01-22 21:39:50'),
(2, 'Isabel', 'Alejandra_BotelloMartinez22@hotmail.com', '$2b$10$OgQdkgppgSOsj0hJ3Bp0b.Xf63taIPkrmpdveJVgYvDWv1L6SCJ/S', NULL, NULL, '2024-01-22 21:39:50', '2024-01-22 21:39:50'),
(3, 'Dorotea', 'Fernando0@yahoo.com', '$2b$10$3bUh1MT8XslggZbgWy9h.uPZKIn3VFl563DLNIOor0yA.luBV5O5K', NULL, NULL, '2024-01-22 21:39:50', '2024-01-22 21:39:50'),
(4, 'Barbara', 'JoseLuis.PadillaVillegas@yahoo.com', '$2b$10$MNtZirLPsm3uOGxvdYVeW.AdcpJr/VjDJEPwOVT6q/HT/skat5OwC', NULL, NULL, '2024-01-22 21:39:50', '2024-01-22 21:39:50'),
(5, 'Marcos', 'Catalina52@hotmail.com', '$2b$10$RXppTYWth4P0z1435YRfXOyvdwgW2KNAq2MudoHj4wm0yUsIm66VG', NULL, NULL, '2024-01-22 21:39:50', '2024-01-22 21:39:50'),
(6, 'test', 'badr2@daw.com', '$2b$10$.WIkuXroC/WuFigG1Yn73.bFclYCvkrCENKzopoTW.rsl4yWWfdGq', NULL, NULL, '2024-01-22 22:24:49', '2024-01-22 22:24:49');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Rols`
--
ALTER TABLE `Rols`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `RolUsers`
--
ALTER TABLE `RolUsers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `rol_id` (`rol_id`);

--
-- Indices de la tabla `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `Todos`
--
ALTER TABLE `Todos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `TodoUsers`
--
ALTER TABLE `TodoUsers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `todo_id` (`todo_id`);

--
-- Indices de la tabla `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Rols`
--
ALTER TABLE `Rols`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `RolUsers`
--
ALTER TABLE `RolUsers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `Todos`
--
ALTER TABLE `Todos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `TodoUsers`
--
ALTER TABLE `TodoUsers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT de la tabla `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `RolUsers`
--
ALTER TABLE `RolUsers`
  ADD CONSTRAINT `RolUsers_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`),
  ADD CONSTRAINT `RolUsers_ibfk_2` FOREIGN KEY (`rol_id`) REFERENCES `Rols` (`id`);

--
-- Filtros para la tabla `TodoUsers`
--
ALTER TABLE `TodoUsers`
  ADD CONSTRAINT `TodoUsers_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`),
  ADD CONSTRAINT `TodoUsers_ibfk_2` FOREIGN KEY (`todo_id`) REFERENCES `Todos` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
