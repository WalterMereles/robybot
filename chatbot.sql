-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-10-2022 a las 15:16:21
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `chatbot`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria_productos`
--

CREATE TABLE `categoria_productos` (
  `id_categoria` int(11) NOT NULL,
  `nombre_categoria` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `descripcion_categoria` varchar(50) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `categoria_productos`
--

INSERT INTO `categoria_productos` (`id_categoria`, `nombre_categoria`, `descripcion_categoria`) VALUES
(1, 'Celulares', 'Celulares'),
(2, 'Electrodomesticos', 'Electrodomesticos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `chatbot`
--

CREATE TABLE `chatbot` (
  `id` int(11) NOT NULL,
  `queries` varchar(300) NOT NULL,
  `replies` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `chatbot`
--

INSERT INTO `chatbot` (`id`, `queries`, `replies`) VALUES
(1, 'Hola me podrías ayudar? Tengo una consulta', 'Claro estoy para servirte en lo que requieras'),
(2, 'No tengo acceso a Internet', 'Vale te pregunto, donde te encuentras ahora, ¿hay más dispositivos conectados a tu red local?'),
(3, 'Si claro tengo dos teléfonos, pero ninguno tiene acceso a Internet tampoco', 'Tienes algún ordenador conectado por cable'),
(4, 'Si, claro, requieres que lo encienda?', 'Si por favor y me confirmas si no tienes acceso a Internet, en tu ordenador cuando encienda'),
(5, 'Te confirmo que tampoco tiene Internet', 'Reinicia tu modem, espera 10 minutos y reintenta, me confirmas'),
(6, 'Ya me funciona el Internet, muchas gracias', 'Excelente me alegro mucho, gracias por comunicarte con Soporte Técnico ChatBot ConfiguroWeb');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

CREATE TABLE `persona` (
  `personaid` int(11) NOT NULL,
  `personaci` int(11) NOT NULL,
  `nombres` varchar(300) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `apellidos` varchar(300) COLLATE utf8_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`personaid`, `personaci`, `nombres`, `apellidos`) VALUES
(1, 3501120, 'Walter Manuel', 'Mereles Lesme'),
(2, 1237456, 'Juan', 'Perez'),
(3, 5613125, 'araceli', 'diaz');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria_productos`
--
ALTER TABLE `categoria_productos`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indices de la tabla `chatbot`
--
ALTER TABLE `chatbot`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `persona`
--
ALTER TABLE `persona`
  ADD PRIMARY KEY (`personaid`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoria_productos`
--
ALTER TABLE `categoria_productos`
  MODIFY `id_categoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `chatbot`
--
ALTER TABLE `chatbot`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `persona`
--
ALTER TABLE `persona`
  MODIFY `personaid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
