{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          system = system;
          config.allowUnfree = true;
        };
      in
      {
        devShells.default = pkgs.mkShell {
          shellHook = ''
            export CYPRESS_INSTALL_BINARY=0;
            export CYPRESS_RUN_BINARY="${pkgs.cypress}/bin/Cypress";
          '';

          buildInputs = with pkgs; [
            cypress
            nodejs_latest
            yarn
          ];
        };
      });
}
