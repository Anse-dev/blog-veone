import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="max-w-2xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Mon Blog. Tous droits réservés.</p>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-gray-300">Politique de confidentialité</a>
                        <a href="#" className="hover:text-gray-300">Conditions d'utilisation</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
