CREATE DATABASE IF NOT EXISTS appfood
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE appfood;

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS produto_pedido;
DROP TABLE IF EXISTS pedido;
DROP TABLE IF EXISTS cardapio;
DROP TABLE IF EXISTS cliente;
DROP TABLE IF EXISTS entregador;
DROP TABLE IF EXISTS estabelecimento;

SET FOREIGN_KEY_CHECKS = 1;

CREATE TABLE estabelecimento (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  avaliacaoGeral DECIMAL(3,2) NOT NULL DEFAULT 0.00,
  nome VARCHAR(120) NOT NULL,
  telefone VARCHAR(20) NOT NULL,
  endereco VARCHAR(255) NOT NULL,
  imagemUrl VARCHAR(500) NOT NULL DEFAULT '',
  disponivel TINYINT(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (id),
  INDEX idx_estabelecimento_nome (nome)
) ENGINE = InnoDB;

CREATE TABLE cliente (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nome VARCHAR(120) NOT NULL,
  email VARCHAR(160) NOT NULL,
  telefone VARCHAR(20) NOT NULL,
  enderecoEntrega VARCHAR(255) NOT NULL DEFAULT '',
  observacaoEndereco VARCHAR(255) NOT NULL DEFAULT '',
  senha VARCHAR(255) NOT NULL,
  perfil ENUM('ADM', 'CLIENTE') NOT NULL DEFAULT 'CLIENTE',
  PRIMARY KEY (id),
  UNIQUE KEY uq_cliente_email (email),
  INDEX idx_cliente_nome (nome)
) ENGINE = InnoDB;

CREATE TABLE entregador (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  avaliacaoGeral DECIMAL(3,2) NOT NULL DEFAULT 0.00,
  nome VARCHAR(120) NOT NULL,
  telefone VARCHAR(20) NOT NULL,
  veiculo ENUM('MOTO', 'BICICLETA', 'CARRO') NOT NULL DEFAULT 'MOTO',
  disponivel TINYINT(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (id),
  INDEX idx_entregador_nome (nome)
) ENGINE = InnoDB;

CREATE TABLE cardapio (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  estabelecimentoId INT UNSIGNED NOT NULL,
  nome VARCHAR(120) NOT NULL,
  descricaoProduto TEXT NOT NULL,
  categoria VARCHAR(80) NOT NULL DEFAULT '',
  preco DECIMAL(10,2) NOT NULL,
  imagemUrl VARCHAR(500) NOT NULL DEFAULT '',
  disponivel TINYINT(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (id),
  INDEX idx_cardapio_estabelecimento (estabelecimentoId),
  INDEX idx_cardapio_nome (nome),
  CONSTRAINT fk_cardapio_estabelecimento
    FOREIGN KEY (estabelecimentoId)
    REFERENCES estabelecimento (id)
    ON UPDATE CASCADE
    ON DELETE RESTRICT
) ENGINE = InnoDB;

CREATE TABLE pedido (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  clienteId INT UNSIGNED NOT NULL,
  entregadorId INT NOT NULL DEFAULT 0,
  estabelecimentoId INT UNSIGNED NOT NULL,
  status ENUM('ABERTO', 'A_CAMINHO', 'ENTREGUE', 'CANCELADO') NOT NULL DEFAULT 'ABERTO',
  total DECIMAL(10,2) NOT NULL DEFAULT 0.00,
  criadoEm DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  avaliacaoEstabelecimento DECIMAL(3,2) NOT NULL DEFAULT 0.00,
  avaliacaoEntregador DECIMAL(3,2) NOT NULL DEFAULT 0.00,
  PRIMARY KEY (id),
  INDEX idx_pedido_cliente (clienteId),
  INDEX idx_pedido_estabelecimento (estabelecimentoId),
  INDEX idx_pedido_entregador (entregadorId),
  INDEX idx_pedido_status (status),
  INDEX idx_pedido_criado_em (criadoEm),
  CONSTRAINT fk_pedido_cliente
    FOREIGN KEY (clienteId)
    REFERENCES cliente (id)
    ON UPDATE CASCADE
    ON DELETE RESTRICT,
  CONSTRAINT fk_pedido_estabelecimento
    FOREIGN KEY (estabelecimentoId)
    REFERENCES estabelecimento (id)
    ON UPDATE CASCADE
    ON DELETE RESTRICT
) ENGINE = InnoDB;

CREATE TABLE produto_pedido (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  pedidoId INT UNSIGNED NOT NULL,
  cardapioId INT UNSIGNED NOT NULL,
  quantidade INT UNSIGNED NOT NULL,
  precoUnitario DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY uq_produto_pedido_item (pedidoId, cardapioId),
  INDEX idx_produto_pedido_pedido (pedidoId),
  INDEX idx_produto_pedido_cardapio (cardapioId),
  CONSTRAINT fk_produto_pedido_pedido
    FOREIGN KEY (pedidoId)
    REFERENCES pedido (id)
    ON UPDATE CASCADE
    ON DELETE CASCADE,
  CONSTRAINT fk_produto_pedido_cardapio
    FOREIGN KEY (cardapioId)
    REFERENCES cardapio (id)
    ON UPDATE CASCADE
    ON DELETE RESTRICT
) ENGINE = InnoDB;
